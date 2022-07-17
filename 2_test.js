const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.onliner.by/');
    
    const sighInBtn = await page.$('.auth-bar__item--text');
    await sighInBtn.click();
    await page.screenshot({ path: `page.png`});
    await browser.close();
}) ()