const puppeteer = require('puppeteer')
module.exports = {
scroll() {
    (async () => {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 800 })

const scrollable_section = '.section-listbox .section-listbox';

await page.waitForSelector('.section-listbox .section-listbox > .section-listbox');

await page.evaluate(selector => {
  const scrollableSection = document.querySelector(selector);

  scrollableSection.scrollTop = scrollableSection.offsetHeight;
}, scrollable_section);

})

}
}