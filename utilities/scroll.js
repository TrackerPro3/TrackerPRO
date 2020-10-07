const puppeteer = require('puppeteer')
var scrollElement = require('scroll-element');
var scrollToElement = require('scroll-to-element');
var scrollIntoView = require('scroll-into-view');
module.exports = {
  async scroll() {

    const browser = await puppeteer.launch({})
    const page = await browser.newPage()



    await page.evaluate(() => {
      // document.querySelector("//div[contains(text(),'TN')]/following-sibling::div[2]/div").scrollTop=500;
      // document.querySelector("//div[contains(text(),'TN')]/following-sibling::div[2]/div");
      // scrollElement.scrollToElement("//div[contains(text(),'TN')]/following-sibling::div[2]/div");
      // scrollIntoView("//div[contains(text(),'TN')]/following-sibling::div[2]/div");
      // scrollToElement("//div[contains(text(),'TN')]/following-sibling::div[2]/div");
      document.getElementById("//div[contains(text(),'TN')]/following-sibling::div[2]/div").scrollIntoView(true);
      document.ge

   })



  }
}