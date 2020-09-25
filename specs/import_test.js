
Feature('Import Data');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let I_import = require('C:/Users/RC08508/CodeceptJS/pages/import_locators.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');
let pup = require('../utilities/pup.js');

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

After(() => {
  pup.closeBrowser();
})




  Scenario("Import Files @import", (I) => {
    I_import.DataMenu();
    I_import.ImportDataPage();
    I_import.SelectMapping(data.import.MappingType,data.import.HolderName);
    I_import.BrowseFile(data.import.FileName);
    I_import.UploadFile();
    I_import.ImportFile();

  });


  Scenario("Create File Mapping @filemapping", (I) => {
    I_import.DataMenu();
    I.click('//a[contains(text(),"Create File Mapping")]');
    I.fillField('//input[@id="ctl00_cphBody_txtMappingName"]','Test File Mapping');
    I.fillField('//textarea[@id="ctl00_cphBody_txtFileMappingDesc"]','Test File Mapping Desc');
    I.click('//input[@id="cboFileFormat-combo-text"]');
    I.fillField('//input[@id="cboFileFormat-combo-text"]','Excel');
    I.pressKey(['Tab', 'Tab']);
    

    var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'FileMapping');
    td.forEach(function (value) {

      I.click('//button[@id="ctl00_cphBody_fileMappingDataJsonGrid_add"]');
      I.waitForText('Add Field',10);
      I.click('#ctl00_cphBody_txtExternalColumn');
      I.fillField('#ctl00_cphBody_txtExternalColumn',value.ExternalField);
      I.click('#ctl00_cphBody_txtColumnIndexField');
      I.fillField('#ctl00_cphBody_txtColumnIndexField',value.ColumnIndex);
      I.click('#cboFriendlyName-combo-text');
      I.fillField('//input[@id="cboFriendlyName-combo-text"]',value.TrackerproField);
      I.pressKey(['Tab', 'Tab']);
      I.click('#cboDataType-combo-text');
      I.fillField('#cboDataType-combo-text',value.FieldType);
      I.pressKey(['Tab', 'Tab']);
      I.click('#cboDataFormat-combo-text');
      I.fillField('#cboDataFormat-combo-text',value.FieldFormat);
      I.pressKey(['Tab', 'Tab']);
      I.click('//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]');

  });


  I.waitForEnabled('//span[contains(text(),"Save")]');
  I.click('//span[contains(text(),"Save")]');

});
