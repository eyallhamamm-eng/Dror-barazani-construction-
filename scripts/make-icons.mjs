// Builds the favicon set from public/favicon.svg: favicon.ico (PNG-in-ICO, 32px),
// apple-touch-icon.png (180px) and PWA icons (192px, 512px).
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const svg = await readFile("public/favicon.svg");
const png = (size) => sharp(svg, { density: 512 }).resize(size, size).png().toBuffer();

await writeFile("public/apple-touch-icon.png", await sharp(svg, { density: 512 }).resize(180, 180).flatten({ background: "#1c1713" }).png().toBuffer());
await writeFile("public/icon-192.png", await png(192));
await writeFile("public/icon-512.png", await png(512));

// ICO container with a single embedded 32x32 PNG.
const ico32 = await png(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(ico32.length, 14); // image size
header.writeUInt32LE(22, 18); // image offset
await writeFile("public/favicon.ico", Buffer.concat([header, ico32]));
console.log("icons written");
