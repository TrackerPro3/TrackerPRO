
Feature('TrackerPRO');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let I_holder = require('C:/Users/RC08508/CodeceptJS/pages/holder_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');


Before(async(I) => { // or Background
        //Login
        I_login.SelectBuild(data.login.Build);   // input Build Name
        I.see('Ryan');
        I_login.Username(data.login.Username);    // input Username
        I.click('Next');
        I.see('Forgot your password?');
        I_login.Password(data.login.defaultPassword);
        I.click('Next');

        let alert = await I.grabTextFrom(I_login.locators.alertContent);
        I_login.ActualPassword(alert,data.login.Password);   // input Password

        let title = await I.grabTitle();
        I_login.MustChange(title,data.login.newPassword,data.login.newPassword);    

        let page = await I.grabTitle();
        I_login.OrgPage(page,data.login.Org);     // input Org Name

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
    I_holder.HolderName(data.holder.HolderName);
    I_holder.EntityName(data.holder.EntityName);
    I_holder.Classification(data.holder.Classification);
    I_holder.FEIN(data.holder.FEIN);
    I_holder.Address(data.holder.Address);
    I_holder.City(data.holder.City);
    I_holder.State(data.holder.State);
    I_holder.Zip(data.holder.Zip);
    I_holder.INCState(data.holder.INCState);
    // I_holder.SaveHolder();
    // I.waitForText('Holder saved successfully','60');

// Contact
    I_holder.AddContact();
    I.waitForText('Correct the highlighted fields',5);    
    I.checkOption(data.holder.ContactType);
    I.seeCheckboxIsChecked(data.holder.ContactType);
    I_holder.ContactEmail(data.holder.ContactEmail);
    I_holder.ContactName(data.holder.ContactName);
    I_holder.ContactState(data.holder.ContactState);
    I_holder.ContactSave();    
    I.wait(2);
    I_holder.SaveHolder();
    I.waitForText('Holder saved successfully',60);

//State Specific
    I_holder.StateSpecificOpen();
    I.waitForText('State Specific Information',20);
    I_holder.SpecificStateSelect(data.holder.StateSpecific);
    I_holder.StateSpecificSave();
    I.waitForText('State specific information updated successfully',20);
    I_holder.StateSpecificClose();
    I.waitForText('Holder Detail',20);

// Additional Holder Info

    // I.click('//span[contains(text(),"Additional Holder Information")]');
    // I.waitForText('Additional Holder Information',20);
    // I.click('#ctl00_cphBody_userDefinedFieldsJsonGrid_add');
    // I.waitForText('User Defined Field');
    // I.fillField('#ctl00_cphBody_txtDialogUdfName','UDF1');
    // I.click('//div[@id="tpro-udf-dialog"]//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]');
    // I.waitForText('Additional Holder Information',20);
    // I.scrollTo('#ctl00_cphBody_statusIndicatorsJsonGrid_add');
    // I.click('#ctl00_cphBody_statusIndicatorsJsonGrid_add');
    // I.waitForText('Status Indicator',5);
    // I.fillField('#ctl00_cphBody_txtDialogStatusIndicatorName','%');
    // I.fillField('#ctl00_cphBody_txtDialogStatusIndicatorDescription','Stat Ind1');
    // I.click('//div[@id="tpro-si-dialog"]//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]');
    // I.wait(2);
    // I.click('#ctl00_cphToolbarItemsRight_toolbarSaveButton');
    // I.waitForText('User Defined Fields and Status Indicators saved successfully',10);
    // I.click('#ctl00_cphToolbarItemsRight_toolbarCloseButton');
    // I.waitForText('Holder Detail',20);

    I.wait(20);

});


Scenario('Test Add Owner', (I) => {


    I.click('//ul[@id="quickLinkBar"]//a[contains(text(),"Owner Overview")]');
    I.waitForText('Owner Overview',30);
    I.click('#ctl00_cphToolbarItemsRight_toolbarNewButton');
    I.waitForText('Owner Detail',30);
    I.fillField('#ctl00_cphBody_uclModifyOwner_txtFirstName','Test Owner');
    I.click('#ctl00_cphBody_uclModifyOwner_txtOwnerID');
    I.fillField('#ctl00_cphBody_uclModifyOwner_txtOwnerID','100000002');
    I.wait(2);
    I.click('#ctl00_cphToolbarItemsRight_toolbarSaveButton');
    I.wait(20);
});