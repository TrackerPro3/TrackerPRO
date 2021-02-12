
Feature('Security Administration');

let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let SecurityMgmt = require('C:/Users/RC08508/CodeceptJS/pages/securitymgmt_locators.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');
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

Scenario("Test File Upload types @files", ({ I }) => {
    SecurityMgmt.SecurityMenu();
    SecurityMgmt.SecurityAdmin();
    // SecurityMgmt.SecurityAdminSave();

    var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'FileTypes');
    td.forEach(function (value) {

        SecurityMgmt.FileTypeAdd();
        SecurityMgmt.FileTypeExt(value.Extension);
        SecurityMgmt.FileTypeMIME(value.MimeType);
        SecurityMgmt.FileTypeSave();
    });

    SecurityMgmt.SecurityAdminSave();

});
