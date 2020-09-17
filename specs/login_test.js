Feature('TrackerPRO Login');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');

Scenario('Test Login @login', async (I) => {

  I_login.SelectBuild(data.login.Build);   // input Build Name
  I.see('Ryan');
  I_login.Username(data.login.Username);    // input Username
  I.click('Next');
  I.waitForNavigation();
  I.see('Forgot your password?');
  I_login.Password(data.login.defaultPassword);
  I.click('Next');
  I.waitForNavigation();
  I_login.ActualPassword(await I.grabTextFrom(I_login.locators.alertContent), data.login.Password);   // input Password
  I_login.MustChange(await I.grabTitle(), data.login.newPassword, data.login.newPassword);
  I_login.OrgPage(await I.grabTitle(), data.login.Org);     // input Org Name
  I.waitForText('Home', 30);
  I.see('Home');


});

