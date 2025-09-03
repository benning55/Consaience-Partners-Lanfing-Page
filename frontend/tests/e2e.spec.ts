import { test, expect } from '@playwright/test';

test.describe('marketing page', () => {
  test('respects reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    const transform = await page.locator('h1').evaluate(el => getComputedStyle(el).transform);
    expect(transform).toBe('none');
  });

  test('panels are sticky and announce', async ({ page }) => {
    await page.goto('/');
    const panel0 = page.locator('[data-panel="0"]');
    await expect(panel0).toHaveCSS('position', 'sticky');
    await page.mouse.wheel(0, 1200);
    await expect(page.locator('[data-panel="1"]')).toHaveAttribute('aria-label', 'Configure');
  });

  test('cta click tracks event', async ({ page }) => {
    const logs: string[] = [];
    page.on('console', msg => logs.push(msg.text()));
    await page.goto('/');
    await page.getByRole('link', { name: 'Book a demo' }).click();
    expect(logs.some(l => l.includes('trackEvent'))).toBeTruthy();
  });
});
