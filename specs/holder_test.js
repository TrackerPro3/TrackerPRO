
Feature('TrackerPRO');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let I_holder = require('C:/Users/RC08508/CodeceptJS/pages/holder_locators.js');



Before(async(I) => { // or Background
        I_login.SelectBuild('India');      // input Build Name
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
        I.waitForText('Home',20);
        I.see('Home');
  });


Scenario('Test Add Holder', (I) => {

//CreateHolder
    I_holder.HolderOverview();
    I.see('Holder Overview');
    I_holder.NewHolder();
    I.waitForText('Holder Detail',20);
    I.see('Holder Detail');
    I_holder.HolderName('Test Holder 300');
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
    I.waitForText('Correct the highlighted fields',5);    
    I.checkOption('Agent');
    I.seeCheckboxIsChecked('Agent');
    I_holder.ContactEmail('test2@test.com');
    I_holder.ContactName('Contact Name 2');
    I_holder.ContactState('PA');
    I_holder.ContactSave();    
    I.wait(2);
    I_holder.SaveHolder();
    I.waitForText('Holder saved successfully',60);

//State Specific
    I_holder.StateSpecificOpen();
    I.waitForText('State Specific Information',20);
    I_holder.SpecificStateSelect('KS');
    I_holder.StateSpecificSave();
    I.waitForText('State specific information updated successfully',20);
    I_holder.StateSpecificClose();
    I.waitForText('Holder Detail',20);

// Additional Holder Info

    I.click('//span[contains(text(),"Additional Holder Information")]');
    I.waitForText('Additional Holder Information',20);
    I.click('#ctl00_cphBody_userDefinedFieldsJsonGrid_add');
    I.waitForText('User Defined Field');
    I.fillField('#ctl00_cphBody_txtDialogUdfName','UDF1');
    I.click('//div[@id="tpro-udf-dialog"]//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]');
    I.waitForText('Additional Holder Information',20);
    I.scrollTo('#ctl00_cphBody_statusIndicatorsJsonGrid_add');
    I.click('#ctl00_cphBody_statusIndicatorsJsonGrid_add');
    I.waitForText('Status Indicator',5);
    I.fillField('#ctl00_cphBody_txtDialogStatusIndicatorName','%');
    I.fillField('#ctl00_cphBody_txtDialogStatusIndicatorDescription','Stat Ind1');
    I.click('//div[@id="tpro-si-dialog"]//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]');
    I.wait(2);
    I.click('#ctl00_cphToolbarItemsRight_toolbarSaveButton');
    I.waitForText('User Defined Fields and Status Indicators saved successfully',10);
    I.click('#ctl00_cphToolbarItemsRight_toolbarCloseButton');
    I.waitForText('Holder Detail',20);

    I.wait(20);

});
