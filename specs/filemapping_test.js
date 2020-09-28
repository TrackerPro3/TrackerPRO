
Feature('File Mapping');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let I_mapping = require('C:/Users/RC08508/CodeceptJS/pages/filemapping_locators.js');
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

Scenario("Create File Mapping @filemapping", (I) => {

  I_mapping.DataMenu();
  I_mapping.CreateFileMapping();
  I_mapping.MappingName(data.filemapping.MappingName);
  I_mapping.MappingDesc(data.filemapping.MappingDesc);
  I_mapping.MappingType(data.filemapping.MappingType);


  var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'FileMapping');
  td.forEach(function (value) {

    I_mapping.AddMappingFields();
    I_mapping.ExternalField(value.ExternalField);
    I_mapping.ColumnIndex(value.ColumnIndex);
    I_mapping.TrackerproField(value.TrackerproField);
    I_mapping.FieldType(value.FieldType);
    I_mapping.FieldFormat(value.FieldFormat);
    I_mapping.SaveMappingFields();
  });

  I_mapping.SaveFileMapping();

});
