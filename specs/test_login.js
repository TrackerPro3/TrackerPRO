
Feature('TrackerPRO');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/Loginlocators.js');

Scenario('Test Login', (I) => {

//Login
    I_login.SelectBuild('Charlie');
    I.see('Ryan');
    I_login.Username('suryateja.davuluri@ryan.com');
    I.click('Next');
    I.see('Forgot your password?');
    I_login.Password('Password');
    I.click('Next');
    I.see('Select Organization');
    I_login.Org('QA - Surya');
    I.waitForText('Home','20');
    I.see('Home');


});
