Feature('TrackerPRO Login');

let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let pup = require('C:/Users/RC08508/CodeceptJS/utilities/pup.js');


Scenario('Test Login @login', async ({ I }) => {

  Login.SelectBuild(data.login.Build);   // input Build Name
  Login.Username(data.login.Username);    // input Username
  Login.Password(data.login.defaultPassword); // input default Password
  Login.ActualPassword(await I.grabTextFrom(Login.locators.alertContent), data.login.Password);   // input Password
  // Login.ActualPassword(data.login.Password);   // input Password
  Login.MustChange(await I.grabTitle(),data.login.newPassword);   // input New Password
  Login.OrgPage(await I.grabTitle(),data.login.Org);     
  
  // input Org Name
});

