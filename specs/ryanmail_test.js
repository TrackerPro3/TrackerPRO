const puppeteer = require('puppeteer');
Feature('RyanMail');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let pup = require('../utilities/pup.js');


Before(async (I) => { // or Background
    I_login.SelectBuild(data.login.Build);   // input Build Name
    I.waitForText('Ryan', 30);
    I_login.Username(data.login.Username);    // input Username
    I.click('Next');
    I.waitForNavigation();
    I.waitForText('Forgot your password?', 30);
    I_login.Password(data.login.defaultPassword);
    I.click('Next');
    I.waitForNavigation();
    let alert = await I.grabTextFrom(I_login.locators.alertContent);
    I_login.ActualPassword(alert, data.login.Password);   // input Password
    let title = await I.grabTitle();
    I_login.MustChange(title, data.login.newPassword, data.login.newPassword);
    let page = await I.grabTitle();
    I_login.OrgPage(page, data.login.Org);     // input Org Name
    I.waitForText('Home', 30);
    I.see('Home');
  });

     
 


Scenario("RyanMail Status Page", async (I) => {
 
    I.click('#ctl00_reportHistoryLink');
    I.waitForText('Report History',30);
    I.wait(3);
    pup.holdKey();
    I.click('//a[@id="grid-refresh"]//i[@class="fa fa-refresh"]');
    pup.releaseKey();
    I.wait(5)
    I.click('(//a[contains(text(),"Template (RyanMail)")])[1]');
    I.wait(30)


    pup.iframe();


    // I.click('//span[contains(text(),"Send")]');
    // I.waitForText('Report History',30);
    // I.click('#ctl00_cphToolbarItemsRight_toolbarViewButton');
  //   await within({frame: "#aceFrame"}, () => {
  //     I.wait(5);
  //     I.click('(//button[@type="button" and @class="btn btn-link position-relative"])[3]')

  //     I.click('//span[contains(text(),"Recipient")]')
  // });
  // pause();
  // I.switchTo('#aceFrame');
  // pause();
  // let pagesource = await I.grabSource();
  // console.log(pagesource);

  // I.switchTo();
  // let pagesource2 = await I.grabSource();
  // console.log(pagesource2);


  // I.click('//span[contains(text(),"Recipient")]')


  I.wait(10);

});


// After(() => {
//   pup.closeBrowser();
// })
