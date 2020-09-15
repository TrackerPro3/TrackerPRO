Feature('Import Data');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let I_import = require('C:/Users/RC08508/CodeceptJS/pages/import_locators.js');




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
    I_import.DataMenu();
    I_import.ImportDataPage();
    I_import.SelectMapping(data.import.MappingType,data.import.HolderName);
    I_import.BrowseFile(data.import.FileName);
    I_import.UploadFile();
    I_import.ImportFile();

  });
