const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.onliner.by/')
    await page.screenshot({ path: 'screen/page.png', fullPage: true});
    await browser.close();
}) ()
