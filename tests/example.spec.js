// @ts-nocheck
const { test, expect, chromium } = require('@playwright/test')

// test('get started', async ({ page }) => {
//   await page.goto('http://localhost:3000/')

//   await page.getByPlaceholder('find').fill('avatar')
//   await page.getByRole('button', { name: /search/i }).click()
//   await expect(page.getByText('Movie bar')).toBeVisible()
//   const header = page.locator('#header')
//   await expect(header).toHaveClass('header__center')
//   const main = page.locator('#main')
//   await expect(main).toHaveClass('main')
// })

test('check request and response', async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // Subscribe to 'request' and 'response' events.
  page.on('request', (request) =>
    console.log('>>', request.method(), request.url()),
  )
  page.on('response', (response) =>
    console.log('<<', response.status(), response.url()),
  )
  // await page.goto('http://localhost:3000/')

  await browser.close()
})
