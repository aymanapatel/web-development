import { test, expect } from '@playwright/test';

test('Visual test', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveScreenshot();
});