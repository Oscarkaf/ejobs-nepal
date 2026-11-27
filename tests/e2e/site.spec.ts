import { expect, test, type Page } from "@playwright/test";

/** Returns the visible primary navigation, opening the mobile menu first on small screens */
async function primaryNav(page: Page) {
  const menuButton = page.getByRole("button", { name: "Open menu" });
  if (await menuButton.isVisible()) {
    await menuButton.click();
    return page.getByRole("navigation", { name: "Mobile" });
  }
  return page.getByRole("navigation", { name: "Main" });
}

test.describe("Homepage", () => {
  test("renders the hero with the headline and a working Apply link", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/E-Jobs Nepal/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Hire Smarter");
    await expect(page.getByRole("link", { name: /Apply Now/i }).first()).toHaveAttribute(
      "href",
      /docs\.google\.com\/forms/,
    );
  });

  test("switches article pages in place without reloading", async ({ page }) => {
    await page.goto("/");
    const pageTwo = page.getByRole("button", { name: "Page 2" });
    test.skip((await pageTwo.count()) === 0, "WordPress API unavailable, so only fallback posts are shown");

    const firstTitle = page.locator('[aria-live="polite"] h3').first();
    const before = (await firstTitle.textContent()) ?? "";

    await pageTwo.scrollIntoViewIfNeeded();
    await pageTwo.click();

    await expect(pageTwo).toHaveAttribute("aria-current", "page");
    await expect(firstTitle).not.toHaveText(before);
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("Navigation", () => {
  test("goes from the homepage to About Us and marks it as the current page", async ({ page }) => {
    await page.goto("/");
    const nav = await primaryNav(page);
    await nav.getByRole("link", { name: "About Us", exact: true }).click();

    await expect(page).toHaveURL(/\/about-us\/$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Bridging Nepal");
    await expect(page).toHaveTitle("About Us | E-Jobs Nepal");
  });

  test("has no broken internal links on either page", async ({ page, request }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "Links are identical on mobile; checked once on desktop");

    for (const path of ["/", "/about-us/"]) {
      await page.goto(path);
      const hrefs = await page
        .locator('a[href^="/"]')
        .evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute("href") ?? ""))]);

      for (const href of hrefs) {
        const response = await request.get(href);
        expect(response.status(), `${href} linked from ${path}`).toBeLessThan(400);
      }
    }
  });

  test("redirects the legacy /about URL to /about-us/", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveURL(/\/about-us\/$/);
  });

  test("shows the custom 404 page with a way back home", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist/");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(/couldn.t find that page/i);

    await page.getByRole("link", { name: /Back to home/ }).click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("Responsive layout", () => {
  test("mobile menu opens, lists every page and closes with Escape", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "Mobile-only behaviour");

    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();

    const menu = page.getByRole("navigation", { name: "Mobile" });
    await expect(menu).toBeVisible();
    for (const label of ["Home", "About Us", "Our Services", "Blog", "Contact"]) {
      await expect(menu.getByRole("link", { name: label, exact: true })).toBeVisible();
    }
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
  });

  test("pages never scroll sideways on a phone", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "Mobile-only check");

    for (const path of ["/", "/about-us/"]) {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `horizontal overflow on ${path}`).toBeLessThanOrEqual(0);
    }
  });
});