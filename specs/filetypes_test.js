
Feature('File Types');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
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

Scenario("Test File upload types @files", (I) => {
    I.click('//a[@class="dropdown-toggle"][contains(text(),"Security")]');
    I.click('//a[contains(text(),"Security Administration")]');
    I.waitForNavigation();
    I.waitForText('Security Administration', 30);

    var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'FileTypes');
    td.forEach(function (value) {

        I.scrollTo('//button[@id="ctl00_cphBody_fileUploadTypeGrid_add"]');
        I.click('//button[@id="ctl00_cphBody_fileUploadTypeGrid_add"]');
        I.waitForText('File Type', 10);
        I.click('#ctl00_cphBody_txtFileExtension');
        I.fillField('#ctl00_cphBody_txtFileExtension',value.Extension);
        I.click('#ctl00_cphBody_txtFileMimeType');
        I.fillField('#ctl00_cphBody_txtFileMimeType',value.MimeType);
        I.click('//div[@id="tpro-fileType-dialog"]//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]')
    });

    I.waitForEnabled('//a[@id="ctl00_cphToolbarItemsRight_toolbarSaveButton"]',10);
    I.click('//a[@id="ctl00_cphToolbarItemsRight_toolbarSaveButton"]');
    I.waitForText('Security Settings saved successfully',20);
});
