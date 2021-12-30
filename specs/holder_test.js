Feature('TrackerPRO Holder');

let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let Holder = require('C:/Users/RC08508/CodeceptJS/pages/holder_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');
// let pup = require('../utilities/pup.js');




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


Scenario('Test Add Single Holder @oneholder', ({ I }) => {

    Holder.HolderOverview();  //CreateHolder
    I.waitForText('Holder Overview',30);
    Holder.NewHolder();
    I.waitForText('Holder Detail',30);
    Holder.HolderName(data.holder.HolderName);
    Holder.EntityName(data.holder.EntityName);
    Holder.Classification(data.holder.Classification);
    Holder.FEIN(data.holder.FEIN);
    Holder.Address(data.holder.Address);
    Holder.City(data.holder.City);
    Holder.State(data.holder.State);
    Holder.Zip(data.holder.Zip);
    Holder.INCState(data.holder.INCState);
    Holder.SaveHolder();

    

    Holder.AddContact();   // Contact
    I.checkOption(data.holder.ContactType);
    I.seeCheckboxIsChecked(data.holder.ContactType);
    Holder.ContactEmail(data.holder.ContactEmail);
    Holder.ContactName(data.holder.ContactName);
    Holder.ContactState(data.holder.ContactState);
    Holder.ContactSave();
    I.wait(2);
    Holder.SaveHolder();

    Holder.StateSpecificOpen();    //State Specific
    Holder.SpecificStateSelect(data.holder.StateSpecific);
    Holder.StateSpecificSave();
    Holder.StateSpecificClose();

    Holder.AdditionalHolderInfo();    // Additional Holder Info
    Holder.UDFAdd();
    Holder.UDFAddName(data.holder.UDFName);
    Holder.UDFSave();
    I.wait(2);
    Holder.StatIndAdd();
    Holder.StatIndName(data.holder.StatIndName);
    Holder.StatIndDesc(data.holder.StatIndDesc);
    Holder.StatIndSave();
    I.wait(2);
    Holder.AdditionalHolderInfoSave();
    Holder.AdditionalHolderInfoClose();
    
});


// var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Holder');
// td.forEach(function (value) {
// Scenario("Test Multiple Holder '" + value.HolderType  + "' @allholders", (I) => {


Scenario("Test Multiple Holder @allholders", ({ I }) => {
    var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Holder');
    td.forEach(function (value) {


        I.say(value.HolderType);    //CreateHolder
        Holder.HolderOverview();
        I.see('Holder Overview');
        // pause();
        Holder.NewHolder();
        I.see('Holder Detail');
        Holder.HolderName(value.HolderName);
        Holder.EntityName(value.Entity);
        Holder.Classification(value.Classification);
        Holder.FEIN(value.FEIN);
        Holder.Address(value.Address);
        Holder.City(value.City);
        Holder.State(value.State);
        Holder.Zip(value.Zip);
        Holder.INCState(value.INCState);
        Holder.SaveHolder();

        Holder.AddContact();  //Contact
        I.retry(2).checkOption(value.ContactType);
        I.retry(2).seeCheckboxIsChecked(value.ContactType);
        Holder.ContactEmail(value.ContactEmail);
        Holder.ContactName(value.ContactName);
        Holder.ContactState(value.ContactState);
        Holder.ContactSave();
        I.wait(2);
        Holder.SaveHolder();

        Holder.StateSpecificOpen(); //State Specific
        Holder.SpecificStateSelect(value.StateSpecific);
        Holder.StateSpecificSave();
        Holder.StateSpecificClose();

        Holder.AdditionalHolderInfo();  // Additional Holder Info
        Holder.UDFAdd();
        Holder.UDFAddName(value.UDFName);
        Holder.UDFSave();
        Holder.StatIndAdd();
        Holder.StatIndName(value.StatIndName);
        Holder.StatIndDesc(value.StatIndDesc);
        Holder.StatIndSave();
        Holder.AdditionalHolderInfoSave();
        Holder.AdditionalHolderInfoClose();
    });
})


