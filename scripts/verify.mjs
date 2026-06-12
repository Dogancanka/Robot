// Ad-hoc visual verification: loads the built site headlessly, drives the
// demo and saves screenshots to /tmp/arc6-shots. Not part of the app build.
import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { mkdirSync } from "node:fs";

const DIST = new URL("../dist", import.meta.url).pathname;
const OUT = "/tmp/arc6-shots";
mkdirSync(OUT, { recursive: true });

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".glb": "model/gltf-binary",
  ".svg": "image/svg+xml",
};

const blockGLB = process.argv.includes("--no-glb");

const server = createServer(async (req, res) => {
  let path = req.url.split("?")[0];
  if (path === "/") path = "/index.html";
  if (blockGLB && path.endsWith(".glb")) {
    res.writeHead(404).end("blocked");
    return;
  }
  try {
    const data = await readFile(join(DIST, path));
    res.writeHead(200, { "content-type": MIME[extname(path)] ?? "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404).end("nf");
  }
});
await new Promise((r) => server.listen(4199, r));

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--enable-unsafe-swiftshader", "--disable-gpu"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1500, height: 950 });

const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push(String(e)));

// The sandbox has no outbound network: drop external requests (web fonts).
await page.setRequestInterception(true);
page.on("request", (req) => {
  if (req.url().startsWith("http://localhost:4199")) req.continue();
  else req.abort();
});

await page.goto("http://localhost:4199/", { waitUntil: "domcontentloaded" });

// Wait for both viewers to report ready
await page.waitForFunction(
  () => document.querySelectorAll(".viewer-loading").length === 0,
  { timeout: 30000 }
);
await new Promise((r) => setTimeout(r, 2500));
const tag = blockGLB ? "fallback" : "glb";
await page.screenshot({ path: `${OUT}/1-hero-${tag}.png` });

// Scroll to the demo section
await page.evaluate(() => document.getElementById("demo").scrollIntoView());
await new Promise((r) => setTimeout(r, 1200));
await page.screenshot({ path: `${OUT}/2-demo-${tag}.png` });

const badge = await page.$eval(".panel-badge", (el) => el.textContent);
console.log("rig badge:", badge);

// Run pick & place and sample status along the way
await page.evaluate(() => {
  const btns = [...document.querySelectorAll(".btn-command")];
  btns.find((b) => b.textContent.includes("Pick"))?.click();
});
const statuses = new Set();
for (let i = 0; i < 24; i++) {
  await new Promise((r) => setTimeout(r, 500));
  statuses.add(await page.$eval(".panel-status", (el) => el.textContent));
  if (i === 7) await page.screenshot({ path: `${OUT}/3-pick-${tag}.png` });
  if (i === 14) await page.screenshot({ path: `${OUT}/4-transfer-${tag}.png` });
}
await page.screenshot({ path: `${OUT}/5-end-${tag}.png` });
console.log("statuses seen:", [...statuses].join(" | "));

// Advanced panel + slider jog
await page.evaluate(() => document.querySelector(".advanced-toggle").click());
await page.evaluate(() => {
  const slider = document.querySelector(".joint-sliders input");
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
  setter.call(slider, "60");
  slider.dispatchEvent(new Event("input", { bubbles: true }));
  slider.dispatchEvent(new Event("change", { bubbles: true }));
});
await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: `${OUT}/6-advanced-${tag}.png` });

console.log("console errors:", errors.length ? errors : "none");
await browser.close();
server.close();
