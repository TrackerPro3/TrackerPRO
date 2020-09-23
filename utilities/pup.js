const puppeteer = require('puppeteer');

module.exports = {

  closeBrowser() {

    (async () => {
      const browser = await puppeteer.launch();
      await browser.close();
    })();

  },


  holdKey() {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.keyboard.down('Shift')
    })();
  },

  releaseKey() {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.keyboard.up('Shift')
    })();  
  },

  async iframe() {
    // return await this.page.evaluate(() => {
       let iframe = document.getElementById('#aceFrame');
       let doc = iframe.contentDocument;
       
       doc.click('(//button[@type="button" and @class="btn btn-link position-relative"])[3]');
    // });
}






}