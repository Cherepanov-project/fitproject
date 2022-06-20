import { test, expect } from '@playwright/test'

test('should navigate to the overview page', async ({ page }) => {
  test.setTimeout(90000)  
  await page.goto('http://localhost:3000/admin')
  await page.fill("input[type='email']",'testAdmin@testAdmin.testAdmin')
  await page.fill("input[type='password']",'testAdmin')
  await page.click("button[type='submit']",{timeout:40000})
  await expect(page).toHaveURL('http://localhost:3000/admin/overview',{timeout:40000})
})