# Run from the repo root: python3 scripts/enhance_photos.py  (needs opencv-python-headless, numpy)
# Classic (non-AI) enhancement: remove JPEG blocking, upscale 2x with Lanczos, sharpen luminance only.
import cv2, numpy as np
def enhance(img, scale=2.0, denoise=4, amount=0.7, sigma=1.1):
    d = cv2.fastNlMeansDenoisingColored(img, None, denoise, denoise, 5, 15)
    up = cv2.resize(d, None, fx=scale, fy=scale, interpolation=cv2.INTER_LANCZOS4)
    lab = cv2.cvtColor(up, cv2.COLOR_BGR2LAB).astype(np.float32)
    L = lab[..., 0]
    blur = cv2.GaussianBlur(L, (0, 0), sigma * scale)
    lab[..., 0] = np.clip(L + amount * (L - blur), 0, 255)
    out = cv2.cvtColor(lab.astype(np.uint8), cv2.COLOR_LAB2BGR)
    # mild local contrast (CLAHE) on luminance
    lab2 = cv2.cvtColor(out, cv2.COLOR_BGR2LAB)
    lab2[..., 0] = cv2.createCLAHE(clipLimit=1.2, tileGridSize=(8, 8)).apply(lab2[..., 0])
    return cv2.cvtColor(lab2, cv2.COLOR_LAB2BGR)
if __name__ == "__main__":
    import os
    os.makedirs("assets/enhanced", exist_ok=True)
    for f in sorted(os.listdir("assets/photos")):
        if not f.endswith(".jpg"):
            continue
        out = enhance(cv2.imread("assets/photos/" + f), denoise=3)
        cv2.imwrite("assets/enhanced/" + f, out, [cv2.IMWRITE_JPEG_QUALITY, 93])
        print(f, out.shape[1], "x", out.shape[0])
