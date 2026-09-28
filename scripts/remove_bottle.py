# Run from the repo root: python3 scripts/remove_bottle.py  (needs opencv-python-headless, numpy)
# Removes the Coca-Cola bottle from two project photos by rebuilding each pixel row from the
# pixels just left and right of the bottle (the background there is horizontal bands:
# counter top, backsplash, wall), then adding matched grain so the patch isn't smoother than the photo.
import cv2, numpy as np, sys
P = "assets/photos/"
rng = np.random.default_rng(7)

def sample(im, x, y):
    # bilinear sample, x/y float
    x0f, y0f = int(np.floor(x)), int(np.floor(y))
    fx, fy = x - x0f, y - y0f
    a = im[y0f, x0f] * (1 - fx) + im[y0f, x0f + 1] * fx
    b = im[y0f + 1, x0f] * (1 - fx) + im[y0f + 1, x0f + 1] * fx
    return a * (1 - fy) + b * fy

def clean(name, x0, y0, x1, y1, pad=4, slope=0.0, slope_until=None):
    """slope: dy/dx of background lines to follow (0 = horizontal); applies to rows above slope_until."""
    im = cv2.imread(P + name + ".jpg").astype(np.float32)
    out = im.copy()
    for y in range(y0, y1 + 1):
        s = slope if slope_until is not None and y < slope_until else 0.0
        for x in range(x0, x1 + 1):
            # walk along the background line through (x, y) to just outside each side of the patch
            xl, xr = x0 - 1 - pad / 2, x1 + 1 + pad / 2
            # the band under a sloped edge ends at a horizontal line (slope_until), so never sample past it
            cap = (slope_until - 1.5) if s else 1e9
            L = sample(im, xl, min(y + s * (xl - x), cap))
            R = sample(im, xr, min(y + s * (xr - x), cap))
            t = (x - xl) / (xr - xl)
            out[y, x] = L * (1 - t) + R * t
    # grain: sample residual noise from the band just left of the patch
    ref = im[y0:y1 + 1, x0 - 12:x0 - 2]
    noise = ref - cv2.GaussianBlur(ref, (0, 0), 1.2)
    tiled = np.tile(noise, (1, (x1 - x0 + 1) // noise.shape[1] + 1, 1))[:, : x1 - x0 + 1]
    out[y0:y1 + 1, x0:x1 + 1] += tiled * 0.9
    # soften the vertical seams
    mask = np.zeros(im.shape[:2], np.float32)
    mask[y0:y1 + 1, x0:x1 + 1] = 1
    mask = cv2.GaussianBlur(mask, (0, 0), 1.0)[..., None]
    res = im * (1 - mask) + out * mask
    return np.clip(res, 0, 255).astype(np.uint8)

jobs = {
    "living-double-height": (230, 386, 246, 420),
    "kitchen-u-charcoal": (437, 400, 462, 468, 4, -0.336, 437),
}
for name, box in jobs.items():
    res = clean(name, *box)
    cv2.imwrite(P + name + ".jpg", res, [cv2.IMWRITE_JPEG_QUALITY, 97])
    print("cleaned", name)
