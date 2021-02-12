
Feature('Data Transfer');

let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let DataTransfer = require('C:/Users/RC08508/CodeceptJS/pages/datatransfer_locators.js');
let pup = require('../utilities/pup.js');

Before(async ({ I }) => { // or Background
  Login.SelectBuild(data.login.Build);   // input Build Name
  Login.Username(data.login.Username);    // input Username
  Login.Password(data.login.defaultPassword);
  Login.ActualPassword(await I.grabTextFrom(Login.locators.alertContent), data.login.Password);   // input Password
  Login.MustChange(data.login.newPassword);
  Login.OrgPage(data.login.Org); 
});

After(() => {
  pup.closeBrowser();
})




  Scenario("Import Files @import", ({ I }) => {
    DataTransfer.DataMenu();
    DataTransfer.ImportDataPage();
    DataTransfer.SelectMapping(data.import.MappingType,data.import.HolderName);
    DataTransfer.BrowseFile(data.import.FileName);
    DataTransfer.UploadFile();
    DataTransfer.ImportFile();

  });


  