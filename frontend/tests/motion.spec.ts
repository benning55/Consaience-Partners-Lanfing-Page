import { test, expect } from '@playwright/test';

test.describe('Motion and Accessibility', () => {
  test('should respect prefers-reduced-motion', async ({ page }) => {
    // Set reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });

    await page.goto('/');

    // Check that animations are disabled
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();

    // Verify no transform animations are applied
    const transform = await hero.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.transform;
    });

    expect(transform).toBe('none');
  });

  test('should have proper focus states', async ({ page }) => {
    await page.goto('/');

    // Test keyboard navigation
    await page.keyboard.press('Tab');

    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();

    // Check focus ring is visible
    const focusRing = await focusedElement.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.outline || style.boxShadow;
    });

    expect(focusRing).toBeTruthy();
  });

  test('should have semantic headings', async ({ page }) => {
    await page.goto('/');

    // Check for proper heading hierarchy
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);

    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
  });
});