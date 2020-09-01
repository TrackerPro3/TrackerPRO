Feature('Import Data');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');



Before(async (I) => { // or Background
  //Login
  I_login.SelectBuild(data.login.Build);   // input Build Name
  I.see('Ryan');
  I_login.Username(data.login.Username);    // input Username
  I.click('Next');
  I.see('Forgot your password?');
  I_login.Password(data.login.defaultPassword);
  I.click('Next');

  let alert = await I.grabTextFrom(I_login.locators.alertContent);
  I_login.ActualPassword(alert, data.login.Password);   // input Password

  let title = await I.grabTitle();
  I_login.MustChange(title, data.login.newPassword, data.login.newPassword);

  let page = await I.grabTitle();
  I_login.OrgPage(page, data.login.Org);     // input Org Name

  I.waitForText('Home', 30);
  I.see('Home');
});



  Scenario("Import ", (I) => {

    I.click('//a[@class="dropdown-toggle"][contains(text(),"Data")]');
    I.click('//a[contains(text(),"Import Data")]');
    I.waitForText('Import Data',30);
    // I.click('#ctl00_cphBody_cboFileMappingName');
    I.selectOption('#ctl00_cphBody_cboFileMappingName','Tracker PRO XML Layout');
    I.waitForText('Tracker PRO XML Layout',20);
    // pause();
    I.attachFile('#ctl00_cphBody_DataImportFile-fileBrowse','uploads/DDL.XML');
    I.click('#ctl00_cphBody_DataImportFile-fileUploader');
    I.waitForEnabled('#ctl00_cphToolbarItemsRight_toolbarImportButton',50);
    I.wait(2);
    I.click('#ctl00_cphToolbarItemsRight_toolbarImportButton');
    I.waitForText('Report History',30);
  });
