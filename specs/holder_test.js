
Feature('TrackerPRO');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/Loginlocators.js');
let I_holder = require('C:/Users/RC08508/CodeceptJS/pages/HolderLocators.js');
// let login = require('C:/Users/RC08508/CodeceptJS/specs/login_test.js');



Before(async(I) => { // or Background
        I_login.SelectBuild('Foxtrot');      // input Build Name
        I.see('Ryan');
        I_login.Username('suryateja.davuluri@ryan.com');    // input Username
        I.click('Next');
        I.see('Forgot your password?');
        I_login.Password('password');
        I.click('Next');
        let alert = await I.grabTextFrom(I_login.locators.alertContent);
        I_login.ActualPassword(alert,'Password');   // input Password
        let title = await I.grabTitle();
        I_login.MustChange(title,'Password','Password');    
        let page = await I.grabTitle();
        I_login.OrgPage(page,'QA - Surya');     // input Org Name
        I.waitForText('Home','20');
        I.see('Home');
  });


Scenario('Test Add Holder', (I) => {

//CreateHolder
    I_holder.HolderOverview();
    I.see('Holder Overview');
    I_holder.NewHolder();
    I.waitForText('Holder Detail','20');
    I.see('Holder Detail');
    I_holder.HolderName('Test Holder POM500');
    I_holder.EntityName('Test Entity');
    I_holder.Classification('F');
    I_holder.FEIN('987654321');
    I_holder.Address('Test Address');
    I_holder.City('Test City');
    I_holder.State('NY');
    I_holder.Zip('123456789');
    I_holder.INCState('NY');
    // I_holder.SaveHolder();
    // I.waitForText('Holder saved successfully','60');

// Contact
    I_holder.AddContact();
    I.waitForText('Correct the highlighted fields','5');    
    I.checkOption('Agent');
    I.seeCheckboxIsChecked('Agent');
    I_holder.ContactEmail('test2@test.com');
    I_holder.ContactName('Contact Name 2');
    I_holder.ContactState('PA');
    I_holder.ContactSave();    
    I.wait(2);
    I_holder.SaveHolder();
    I.waitForText('Holder saved successfully','60');
    I.wait(20);

});
