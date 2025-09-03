import { test, expect } from '@playwright/test';

test.describe('Adtech Integration', () => {
  test('should track CTA clicks', async ({ page }) => {
    // Listen for console logs to verify adtech events
    const consoleLogs: string[] = [];
    page.on('console', msg => {
      if (msg.text().includes('[MockAdtech]')) {
        consoleLogs.push(msg.text());
      }
    });

    await page.goto('/');

    // Click primary CTA
    const primaryCta = page.locator('a[href="/contact"]').first();
    await primaryCta.click();

    // Wait for navigation
    await page.waitForURL('**/contact');

    // Verify adtech event was tracked
    expect(consoleLogs.some(log => log.includes('cta_click'))).toBe(true);
  });

  test('should identify users on contact form submission', async ({ page }) => {
    const consoleLogs: string[] = [];
    page.on('console', msg => {
      if (msg.text().includes('[MockAdtech]')) {
        consoleLogs.push(msg.text());
      }
    });

    await page.goto('/contact');

    // Fill out form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="company"]', 'Test Company');
    await page.fill('textarea[name="message"]', 'Test message');

    // Submit form
    await page.click('button[type="submit"]');

    // Wait for form submission
    await page.waitForSelector('text=Thanks for reaching out!');

    // Verify adtech events were triggered
    expect(consoleLogs.some(log => log.includes('contact_form_submit'))).toBe(true);
    expect(consoleLogs.some(log => log.includes('Identifying user'))).toBe(true);
  });
});