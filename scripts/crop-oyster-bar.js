/**
 * One-off crop helper for overhead Carmel table shot → fish + oyster spread thumbs.
 * Usage: node scripts/crop-oyster-bar.js <srcTable.png> <destDir>
 */
const sharp = require("sharp");
const path = require("path");

const src = path.resolve(process.argv[2]);
const destDir = path.resolve(process.argv[3]);

(async () => {
  const m = await sharp(src).metadata();
  const W = m.width ?? 646;
  const H = m.height ?? 1024;

  // Wider crop = more tabletop context; no forced 4:3 resize (was re-cropping / “zooming” the dish)
  const fish = {
    left: Math.round(W * 0.06),
    top: Math.round(H * 0.048),
    width: Math.round(W * 0.88),
    height: Math.round(H * 0.34),
  };
  const seafood = {
    left: Math.round(W * 0.04),
    top: Math.round(H * 0.36),
    width: Math.round(W * 0.92),
    height: Math.round(H * 0.38),
  };

  await sharp(src)
    .extract(fish)
    .resize({ width: 1800, withoutEnlargement: false })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(destDir, "carmel-oyster-launch-fish.jpg"));

  await sharp(src)
    .extract(seafood)
    .resize({ width: 1800, withoutEnlargement: false })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(destDir, "oyster-bar-seafood-spread.jpg"));

  console.log("crops ok", { W, H, fish, seafood });
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
