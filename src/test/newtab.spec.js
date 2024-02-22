import {test, expect } from '@playwright/test';

test('new tab accessing',async ({context}) => {
  const page = await context.newPage()
  await page.goto('url')
await new Promise(resolve => setTimeout(resolve, 5000));
console.log(await page.title()) //parent tab
})