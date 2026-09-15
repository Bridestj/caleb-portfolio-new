import fs from "fs";
import path from "path";

const projectRoot = process.cwd();
const outDir = path.join(projectRoot, "out");
const indexPath = path.join(outDir, "index.html");
const outputPath = path.join(
  projectRoot,
  "Caleb-Mmesoma-Portfolio.html"
);

let html = fs.readFileSync(indexPath, "utf8");

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  const types = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
  };

  return types[ext] || "application/octet-stream";
}

function toDataUri(relativePath) {
  const cleanPath = relativePath
    .replace(/^[/\\]/, "")
    .replaceAll("/", path.sep);

  const fullPath = path.join(outDir, cleanPath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }

  const buffer = fs.readFileSync(fullPath);
  const base64 = buffer.toString("base64");
  const mime = getMimeType(fullPath);

  return `data:${mime};base64,${base64}`;
}

/* ---------------------------------
   INLINE ALL STYLESHEETS
--------------------------------- */

const stylesheetRegex =
  /<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/gi;

html = html.replace(
  stylesheetRegex,
  (fullTag, href) => {
    const cleanPath = href
      .replace(/^[/\\]/, "")
      .replaceAll("/", path.sep);

    const cssPath = path.join(outDir, cleanPath);

    if (!fs.existsSync(cssPath)) {
      throw new Error(`CSS file not found: ${cssPath}`);
    }

    let css = fs.readFileSync(cssPath, "utf8");

    /* Inline fonts referenced by the CSS */
    css = css.replace(
      /url\((['"]?)(\/_next\/static\/media\/[^)'"]+)\1\)/g,
      (_, quote, fontPath) => {
        return `url("${toDataUri(fontPath)}")`;
      }
    );

    return `<style>${css}</style>`;
  }
);

/* ---------------------------------
   INLINE IMAGES
--------------------------------- */

const images = [
  "/hero.png",
  "/gavana.jpg",
  "/eastcosels.jpg",
];

for (const image of images) {
  const dataUri = toDataUri(image);

  html = html.replaceAll(
    `src="${image}"`,
    `src="${dataUri}"`
  );
}

/* ---------------------------------
   INLINE FAVICON
--------------------------------- */

const faviconMatch = html.match(
  /href="\/favicon\.ico\?[^"]*"/i
);

if (faviconMatch) {
  const faviconUri = toDataUri(
    "/_next/static/media/favicon.2vob68tjqpejf.ico"
  );

  html = html.replace(
    faviconMatch[0],
    `href="${faviconUri}"`
  );
}

/* ---------------------------------
   REMOVE NEXT.JS DEPENDENCIES
--------------------------------- */

/* Remove preload tags */
html = html.replace(
  /<link[^>]+rel="preload"[^>]*>/gi,
  ""
);

/* Remove all JavaScript */
html = html.replace(
  /<script\b[^>]*>[\s\S]*?<\/script>/gi,
  ""
);

/* Remove Next's hidden metadata containers */
html = html.replace(
  /<div hidden=""><!--\$--><!--\/\$--><\/div>/g,
  ""
);

/* ---------------------------------
   FIX ROOT NAVIGATION
--------------------------------- */

html = html.replace(
  'href="/" class="nav-logo"',
  'href="#top" class="nav-logo"'
);

/* ---------------------------------
   ENSURE UTF-8
--------------------------------- */

html = html.replace(
  /<meta charSet="utf-8"\/>/,
  '<meta charset="utf-8">'
);

/* ---------------------------------
   WRITE FINAL FILE
--------------------------------- */

fs.writeFileSync(
  outputPath,
  html,
  "utf8"
);

const sizeMB =
  fs.statSync(outputPath).size / 1024 / 1024;

console.log("");
console.log("======================================");
console.log(" Portable portfolio created successfully");
console.log("======================================");
console.log("");
console.log(`File: ${outputPath}`);
console.log(`Size: ${sizeMB.toFixed(2)} MB`);
console.log("");
console.log("You can now open the HTML file directly.");
console.log("");