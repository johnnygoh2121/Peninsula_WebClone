/**
 * Downloads static assets from the live site into ./public (same paths as /images/..., /pdf/...).
 * Usage: node scripts/download-assets.mjs
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const BASE = "https://www.my-peninsula.com/content";

function remoteUrl(assetPath) {
  const p = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${BASE}${encodeURI(p)}`;
}

function localFile(assetPath) {
  const clean = assetPath.replace(/^\//, "");
  return path.join(PUBLIC, ...clean.split("/"));
}

function collectPaths() {
  const paths = [
    "/images/favicon-32x32.jpg",
    "/images/favicon-180x180.jpg",
    "/images/logo.jpg",
    "/images/footerMap.jpg",
    "/images/homeBg3.jpg",
    "/images/homeBg4.jpg",
    "/images/homeProduct0.jpg",
    "/images/homeProduct1.jpg",
    "/images/homeProduct2.jpg",
    "/images/homeProduct3.jpg",
    "/images/iso-9001.jpg",
    "/images/iso-14001.jpg",
    "/images/iso-comingSoon.jpg",
    "/images/happyClient2.jpg",
    "/images/happyClient3.jpg",
    "/images/happyClient4.jpg",
    "/images/product0.jpg",
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
    "/images/about4.jpg",
    "/images/about5.jpg",
    "/images/productDetail-1.jpg",
    "/images/productDetail-2.jpg",
    "/images/productDetail-3.jpg",
    "/images/productDetail-4.jpg",
    "/images/productDetail-5.jpg",
    "/pdf/ISO-9001-2008-CERTIFICATE.PDF",
    "/pdf/ISO-14001-2004-CERTIFICATE.PDF",
  ];

  for (let n = 14; n <= 28; n++) {
    paths.push(`/images/machines/${n}-s.jpg`, `/images/machines/${n}.jpg`);
  }
  for (let n = 4; n <= 9; n++) {
    paths.push(`/images/tool rooms/${n}-s.jpg`, `/images/tool rooms/${n}.jpg`);
  }
  for (const n of [5, 6, 8]) {
    paths.push(`/images/quality control/${n}-s.jpg`, `/images/quality control/${n}.jpg`);
  }

  return paths;
}

async function downloadOne(assetPath) {
  const url = remoteUrl(assetPath);
  const dest = localFile(assetPath);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buf);
  return dest;
}

async function main() {
  const paths = collectPaths();
  const errors = [];
  let ok = 0;
  console.log(`Downloading ${paths.length} files into ${PUBLIC}...\n`);

  for (const p of paths) {
    try {
      await downloadOne(p);
      ok++;
      process.stdout.write(`\r${ok}/${paths.length} ${p}`);
    } catch (e) {
      errors.push({ path: p, message: e.message });
      console.error(`\nFAIL ${p}: ${e.message}`);
    }
  }

  console.log(`\n\nDone: ${ok} ok, ${errors.length} failed.`);

  if (errors.length) {
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
