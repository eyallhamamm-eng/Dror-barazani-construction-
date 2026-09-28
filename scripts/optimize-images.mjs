// Turns the enhanced 2x photos in assets/enhanced (see scripts/enhance_photos.py) into web files in
// public/images: <name>.webp at 1x and <name>@2x.webp at 2x, used together in srcset. Also writes a
// 1200x630 JPEG for Open Graph previews (WhatsApp/Facebook don't reliably render WebP).
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "assets/enhanced";
const OUT = "public/images";
const webp = { quality: 88, smartSubsample: true, effort: 6 };

await mkdir(OUT, { recursive: true });

for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const src = path.join(SRC, file);
  const { width } = await sharp(src).metadata();
  const big = await sharp(src).webp(webp).toFile(path.join(OUT, `${name}@2x.webp`));
  const small = await sharp(src).resize({ width: Math.round(width / 2) }).webp(webp).toFile(path.join(OUT, `${name}.webp`));
  console.log(`${name}: ${small.width}w ${(small.size / 1024).toFixed(0)}KB, ${big.width}w ${(big.size / 1024).toFixed(0)}KB`);
}

await sharp(path.join(SRC, "living-double-height.jpg"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(OUT, "og-image.jpg"));
console.log("og-image.jpg  1200x630");
