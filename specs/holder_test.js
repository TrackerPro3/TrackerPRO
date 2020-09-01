// let XLXS = require('xlsx');

Feature('TrackerPRO Holder');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let I_holder = require('C:/Users/RC08508/CodeceptJS/pages/holder_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');





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



Scenario('Test Add Single Holder @oneholder', (I) => {

    //CreateHolder
    I_holder.HolderOverview();
    I.see('Holder Overview');
    I_holder.NewHolder();
    I.waitForText('Holder Detail', 30);
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
    I_holder.SaveHolder();
    I.waitForText('Holder saved successfully','60');

    // // Contact
    // I_holder.AddContact();
    // I.waitForText('Correct the highlighted fields', 5);
    // I.checkOption(data.holder.ContactType);
    // I.seeCheckboxIsChecked(data.holder.ContactType);
    // I_holder.ContactEmail(data.holder.ContactEmail);
    // I_holder.ContactName(data.holder.ContactName);
    // I_holder.ContactState(data.holder.ContactState);
    // I_holder.ContactSave();
    // I.wait(2);
    // I_holder.SaveHolder();
    // I.waitForText('Holder saved successfully', 60);

    // //State Specific
    // I_holder.StateSpecificOpen();
    // I.waitForText('State Specific Information', 30);
    // I_holder.SpecificStateSelect(data.holder.StateSpecific);
    // I_holder.StateSpecificSave();
    // I.waitForText('State specific information updated successfully', 30);
    // I_holder.StateSpecificClose();
    // I.waitForText('Holder Detail', 30);

    // Additional Holder Info

    I_holder.AdditionalHolderInfo();
    I.waitForText('Additional Holder Information',20);
    I_holder.UDFAdd();
    I.waitForText('User Defined Field');
    I_holder.UDFAddName(data.holder.UDFName);
    I_holder.UDFSave();
    I.waitForText('Additional Holder Information',20);
    I.wait(2);
    I_holder.StatIndAdd();
    I.waitForText('Status Indicator',5);
    I_holder.StatIndName(data.holder.StatIndName);
    I_holder.StatIndDesc(data.holder.StatIndDesc);
    I_holder.StatIndSave();
    I.wait(2);
    I_holder.AdditionalHolderInfoSave();
    I.waitForText('User Defined Fields and Status Indicators saved successfully',10);
    I_holder.AdditionalHolderInfoClose();
    I.waitForText('Holder Detail',20);

    // I.wait(20);

});



var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx','Holder');

td.forEach(function(value){

    Scenario("Test Multiple Holder '" + value.HolderType  + "' @allholders", (I) => {

    //CreateHolder
    I_holder.HolderOverview();
    I.see('Holder Overview');
    I_holder.NewHolder();
    I.waitForText('Holder Detail', 30);
    I.see('Holder Detail');
    I_holder.HolderName(value.HolderName);
    I_holder.EntityName(value.Entity);
    I_holder.Classification(value.Classification);
    I_holder.FEIN(value.FEIN);
    I_holder.Address(value.Address);
    I_holder.City(value.City);
    I_holder.State(value.State);
    I_holder.Zip(value.Zip);
    I_holder.INCState(value.INCState);
    I_holder.SaveHolder();
    I.waitForText('Holder saved successfully','60');

    // Contact
    // I_holder.AddContact();
    // I.waitForText('Correct the highlighted fields', 5);
    // I.checkOption(value.ContactType);
    // I.seeCheckboxIsChecked(value.ContactType);
    // I_holder.ContactEmail(value.ContactEmail);
    // I_holder.ContactName(value.ContactName);
    // I_holder.ContactState(value.ContactState);
    // I_holder.ContactSave();
    // I.wait(2);
    // I_holder.SaveHolder();
    // I.waitForText('Holder saved successfully', 60);

    // //State Specific
    // I_holder.StateSpecificOpen();
    // I.waitForText('State Specific Information', 30);
    // I_holder.SpecificStateSelect(value.StateSpecific);
    // I_holder.StateSpecificSave();
    // I.waitForText('State specific information updated successfully', 30);
    // I_holder.StateSpecificClose();
    // I.waitForText('Holder Detail', 30);

    // // Additional Holder Info

    // I_holder.AdditionalHolderInfo();
    // I.waitForText('Additional Holder Information',20);
    // I_holder.UDFAdd();
    // I.waitForText('User Defined Field');
    // I_holder.UDFAddName(value.UDFName);
    // I_holder.UDFSave();
    // I.waitForText('Additional Holder Information',20);
    // I.wait(2);
    // I_holder.StatIndAdd();
    // I.waitForText('Status Indicator',5);
    // I_holder.StatIndName(value.StatIndName);
    // I_holder.StatIndDesc(value.StatIndDesc);
    // I_holder.StatIndSave();
    // I.wait(2);
    // I_holder.AdditionalHolderInfoSave();
    // I.waitForText('User Defined Fields and Status Indicators saved successfully',10);
    // I_holder.AdditionalHolderInfoClose();
    // I.waitForText('Holder Detail',20);

  

});

})