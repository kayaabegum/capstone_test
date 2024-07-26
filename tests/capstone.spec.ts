import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://127.0.0.1:8000/');
    await expect(page).toHaveTitle(/Hissekar/);
});

test('company page arcelik', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 }); // Tam ekran boyutunu ayarlayın

    await page.goto('http://127.0.0.1:8000/');
    const button = await page.getByRole('link', { name: 'ARCLK' });
    setTimeout(async () => { await button.click(); }, 5000);
    await button.click();
    const profbutton = await page.getByRole('link', { name: 'Profitability Measurements' });
    await profbutton.click();
    await page.waitForTimeout(5000);
    const ratbutton = await page.getByRole('link', { name: 'Ratios' });
    await ratbutton.click();
    await page.waitForTimeout(5000);
    const netbutton = await page.getByRole('link', { name: 'Net Debt Analysis' });
    await netbutton.click();
    await page.waitForTimeout(5000);
    const trbutton = await page.getByRole('link', { name: 'Stock Price TL' });
    await trbutton.click();
    await page.waitForTimeout(5000);
    const usbutton = await page.getByRole('link', { name: 'Stock Price USD' });
    await usbutton.click();
    await page.waitForTimeout(5000);
    const balbutton = await page.getByRole('link', { name: 'Balance Sheet' });
    await balbutton.click();
    await page.waitForTimeout(5000);
    const incbutton = await page.getByRole('link', { name: 'Income Statement' });
    await incbutton.click();
    await page.waitForTimeout(5000);
    const cashbutton = await page.getByRole('link', { name: 'Cash Flow Statement' });
    await cashbutton.click();
    await page.waitForTimeout(5000);
});
