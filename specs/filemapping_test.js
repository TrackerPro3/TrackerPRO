
Feature('File Mapping');

let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let FileMapping = require('C:/Users/RC08508/CodeceptJS/pages/filemapping_locators.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');
let pup = require('../utilities/pup.js');

Before(async ({ I }) => { // or Background
  Login.SelectBuild(data.login.Build);   // input Build Name
  Login.Username(data.login.Username);    // input Username
  Login.Password(data.login.defaultPassword); // input default Password
  Login.ActualPassword(await I.grabTextFrom(Login.locators.alertContent), data.login.Password);   // input Password
  // Login.ActualPassword(data.login.Password);   // input Password
  Login.MustChange(await I.grabTitle(),data.login.newPassword);   // input New Password
  Login.OrgPage(await I.grabTitle(),data.login.Org);     // input Org Name
});

After(() => {
  pup.closeBrowser();
})

Scenario("Create File Mapping @filemapping", ({ I }) => {

  FileMapping.DataMenu();
  FileMapping.CreateFileMapping();
  FileMapping.MappingName(data.filemapping.MappingName);
  FileMapping.MappingDesc(data.filemapping.MappingDesc);
  FileMapping.MappingType(data.filemapping.MappingType,data.filemapping.Delimiter);
  


  var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', data.filemapping.MappingSheet);
  td.forEach(function (value) {

    FileMapping.AddMappingFields();
    FileMapping.ExternalField(value.ExternalField);
    FileMapping.ColumnIndex(value.ColumnIndex);
    FileMapping.TrackerproField(value.TrackerproField);
    FileMapping.FieldType(value.FieldType);
    FileMapping.FieldFormat(value.FieldFormat);
    FileMapping.SaveMappingFields();
  });

  FileMapping.SaveFileMapping();

});
