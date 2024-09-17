import {Google} from './googlePage';
const fs = require('fs');
const page = new Google();

test('search this', async () => {
    await page.navigate();
    await page.search('creed');
    let pageResult = await page.getResults();
    expect(pageResult).toContain('creed');
    await fs.writeFile(`${__dirname}/creed.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('9/6 concert')    
    });
    await page.driver.quit();
});