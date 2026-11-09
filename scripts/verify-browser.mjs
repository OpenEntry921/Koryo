import { createRequire } from "node:module";
import path from "node:path";
const testRequire = createRequire(path.resolve("work/test/package.json"));
const { chromium } = testRequire("playwright");
const AxeBuilder = testRequire("@axe-core/playwright").default;
import fs from "node:fs";
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
    headless: true,
    args: ["--no-sandbox"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
  const routes = [
    "/",
    "/company/",
    "/solutions/",
    "/products/",
    "/references/",
    "/contact/",
    "/solutions/parking/",
    "/solutions/lpr/",
    "/solutions/visitor/",
    "/solutions/software/",
    "/solutions/cctv/",
    "/solutions/led/",
    "/products/barrier/",
    "/products/lpr/",
    "/products/access/",
    "/products/software/",
    "/products/cctv-led/",
    "/products/accessories/",
    "/references/upcoming/",
  ];
  const results = { routes: [], accessibility: [], errors };
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      const response = await page.goto(base + route);
      await page.evaluate(() => document.fonts.ready);
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        h1: document.querySelectorAll("h1").length,
        emptyLinks: [...document.querySelectorAll("a")].filter(
          (a) => !a.getAttribute("href") || a.getAttribute("href") === "#",
        ).length,
        missingAlt: document.querySelectorAll("img:not([alt])").length,
      }));
      results.routes.push({
        width,
        route,
        status: response.status(),
        ...state,
      });
      if (
        response.status() !== 200 ||
        state.overflow ||
        state.h1 !== 1 ||
        state.emptyLinks ||
        state.missingAlt
      )
        throw Error(JSON.stringify(results.routes.at(-1)));
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const route of routes) {
    await page.goto(base + route);
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    results.accessibility.push({
      route,
      violations: axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => n.target),
      })),
    });
  }
  await page.goto(base + "/products/");
  for (const name of [
    "차량차단기",
    "차량번호인식기",
    "출입통제·발권장비",
    "주차관리 소프트웨어",
    "CCTV/LED",
    "주변기기",
  ]) {
    await page.getByRole("button", { name, exact: true }).click();
    if ((await page.locator(".product-card").count()) !== 1)
      throw Error("filter failed " + name);
  }
  await page.getByRole("button", { name: "전체", exact: true }).click();
  if ((await page.locator(".product-card").count()) !== 6)
    throw Error("all filter failed");
  results.filters = "passed";
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  await page.getByRole("button", { name: "메뉴 열기" }).click();
  await page
    .locator("#main-navigation")
    .getByRole("link", { name: "PRODUCTS" })
    .click();
  await page.waitForURL("**/products/");
  if (
    (await page
      .getByRole("button", { name: "메뉴 열기" })
      .getAttribute("aria-expanded")) !== "false"
  )
    throw Error("mobile menu failed");
  results.mobileMenu = "passed";
  await page.goto(base + "/solutions/");
  await page.locator("summary").first().click();
  if (!((await page.locator("details").first().getAttribute("open")) !== null))
    throw Error("faq failed");
  results.faq = "passed";
  await page.goto(base + "/contact/");
  if (await page.locator('a[href^="tel:"],a[href^="mailto:"],form').count())
    throw Error("unverified contact active");
  results.contact = "passed";
  await page.goto(base);
  await page.screenshot({ path: "work/home-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: "work/home-desktop.png", fullPage: true });
  const hrefs = new Set();
  for (const route of routes) {
    await page.goto(base + route);
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((as) => as.map((a) => a.getAttribute("href"))))
      hrefs.add(href);
  }
  for (const href of hrefs) {
    const r = await page.request.get(base + href);
    if (r.status() !== 200) throw Error("broken link " + href);
  }
  results.internalLinks = hrefs.size;
  results.metadata = {};
  for (const route of ["/sitemap.xml", "/robots.txt", "/404.html"]) {
    const r = await page.request.get(base + route);
    results.metadata[route] = r.status();
  }
  fs.writeFileSync("work/test-results.json", JSON.stringify(results, null, 2));
  console.log(
    JSON.stringify(
      {
        routeChecks: results.routes.length,
        accessibility: results.accessibility,
        filters: results.filters,
        mobileMenu: results.mobileMenu,
        faq: results.faq,
        contact: results.contact,
        internalLinks: results.internalLinks,
        metadata: results.metadata,
        errors,
      },
      null,
      2,
    ),
  );
  await browser.close();
  if (results.accessibility.some((x) => x.violations.length) || errors.length)
    process.exitCode = 1;
})();
