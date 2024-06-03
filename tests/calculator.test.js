import { test, expect } from '@playwright/test';

test('should calculate addition correctly', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('input[placeholder="Number 1"]', '3');
  await page.fill('input[placeholder="Number 2"]', '2');
  await page.selectOption('select', 'add');
  await page.click('button:has-text("Calculate")');
  const result = await page.textContent('p');
  expect(result).toBe('Result: 5');
});

// Add more tests for other operations and edge cases
