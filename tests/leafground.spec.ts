import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  test.setTimeout(6000000);
  await page.goto('https://leafground.com/dashboard.xhtml');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dashboard/); 

  await page.click('.pi.pi-server.layout-menuitem-icon');
  await page.locator("//span[normalize-space()='Text Box']").click();
  await page.waitForTimeout(3000);
  await page.locator("input[placeholder='Babu Manickam']").fill('raja');
  await page.locator("//input[@placeholder='Your email and tab']").fill('raja18@gmail.com');
  await page.waitForTimeout(3000);
  await page.locator("//div[@class='col-12']//textarea[1]").fill('this is raja i am from chennai');
  await page.waitForTimeout(3000);
  await page.locator("//div[contains(@class,'col-12 mb-2')]//input[1]").fill('no such element');

  // await page.pause();

});


