// Converts the original project photos in assets/photos to web-ready WebP files in public/images,
// plus a 1200x630 JPEG for Open Graph previews (WhatsApp/Facebook don't reliably render WebP).
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "assets/photos";
const OUT = "public/images";
const MAX_WIDTH = 1600;

await mkdir(OUT, { recursive: true });

for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const img = sharp(path.join(SRC, file)).rotate();
  const { width, height } = await img.metadata();
  const info = await img
    .resize({ width: Math.min(width, MAX_WIDTH), withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(OUT, `${name}.webp`));
  console.log(`${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB  (source ${width}x${height})`);
}

await sharp(path.join(SRC, "living-double-height.jpg"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(OUT, "og-image.jpg"));
console.log("og-image.jpg  1200x630");
