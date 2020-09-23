Feature('TrackerPRO Holder');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let I_holder = require('C:/Users/RC08508/CodeceptJS/pages/holder_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');
let pup = require('../utilities/pup.js');


Before(async (I) => { // or Background
    I_login.SelectBuild(data.login.Build);   // input Build Name
    I.waitForText('Ryan', 30);
    I_login.Username(data.login.Username);    // input Username
    I.click('Next');
    I.waitForNavigation();
    I.waitForText('Forgot your password?', 30);
    I_login.Password(data.login.defaultPassword);
    I.click('Next');
    I.waitForNavigation();
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


Scenario('Test Add Single Holder @oneholder', (I) => {
    
    I_holder.HolderOverview();  //CreateHolder
    I.see('Holder Overview');
    I_holder.NewHolder();
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

    I_holder.AddContact();   // Contact
    I.checkOption(data.holder.ContactType);
    I.seeCheckboxIsChecked(data.holder.ContactType);
    I_holder.ContactEmail(data.holder.ContactEmail);
    I_holder.ContactName(data.holder.ContactName);
    I_holder.ContactState(data.holder.ContactState);
    I_holder.ContactSave();
    I.wait(2);
    I_holder.SaveHolder();
    
    I_holder.StateSpecificOpen();    //State Specific
    I_holder.SpecificStateSelect(data.holder.StateSpecific);
    I_holder.StateSpecificSave();
    I_holder.StateSpecificClose();

    I_holder.AdditionalHolderInfo();    // Additional Holder Info
    I_holder.UDFAdd();
    I_holder.UDFAddName(data.holder.UDFName);
    I_holder.UDFSave();
    I.wait(2);
    I_holder.StatIndAdd();
    I_holder.StatIndName(data.holder.StatIndName);
    I_holder.StatIndDesc(data.holder.StatIndDesc);
    I_holder.StatIndSave();
    I.wait(2);
    I_holder.AdditionalHolderInfoSave();
    I_holder.AdditionalHolderInfoClose();
});


// var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Holder');
// td.forEach(function (value) {
// Scenario("Test Multiple Holder '" + value.HolderType  + "' @allholders", (I) => {


    Scenario("Test Multiple Holder @allholders", (I) => {        
    var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Holder');
    td.forEach(function (value) {


        I.say(value.HolderType);    //CreateHolder
        I_holder.HolderOverview();
        I.see('Holder Overview');
        I_holder.NewHolder();
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

        I_holder.AddContact();  //Contact
        I.retry(2).checkOption(value.ContactType);
        I.retry(2).seeCheckboxIsChecked(value.ContactType);
        I_holder.ContactEmail(value.ContactEmail);
        I_holder.ContactName(value.ContactName);
        I_holder.ContactState(value.ContactState);
        I_holder.ContactSave();
        I.wait(2);
        I_holder.SaveHolder();

        I_holder.StateSpecificOpen(); //State Specific
        I_holder.SpecificStateSelect(value.StateSpecific);
        I_holder.StateSpecificSave();
        I_holder.StateSpecificClose();

        I_holder.AdditionalHolderInfo();  // Additional Holder Info
        I_holder.UDFAdd();
        I_holder.UDFAddName(value.UDFName);
        I_holder.UDFSave();
        I_holder.StatIndAdd();
        I_holder.StatIndName(value.StatIndName);
        I_holder.StatIndDesc(value.StatIndDesc);
        I_holder.StatIndSave();
        I_holder.AdditionalHolderInfoSave();
        I_holder.AdditionalHolderInfoClose();
    });
})


