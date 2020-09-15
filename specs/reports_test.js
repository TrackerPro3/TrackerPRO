const puppeteer = require('puppeteer');
Feature('State Reporting');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let I_report = require('C:/Users/RC08508/CodeceptJS/pages/reports_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');

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

Scenario("Generate State Report @statereport ", async (I) => {

    I_report.ReportMenu();
    I_report.GenerateStateReportPage();
    I.waitForText('Generate State Reports', 30);
    I_report.ReportsCategory(data.report.ReportCategory);
    let holders = data.report.HolderList;
    let x;
    for (x of holders) {
        I_report.SelectHolder(x);
    }
    I_report.ReportGroup(data.report.ReportGroup);
    I_report.ReportDetails(data.report.ReportDetail);
    I_report.DatePaid(data.report.DatePaid);
    I_report.StateTable();
    let states = data.report.StateList;
    let y;
    for (y of states) {
        await I_report.ReportTypeZ(data.report.ReportType, y);
    }
    I_report.GenerateStateReport();
    I.waitForText('Report History', 30);

});

var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'StateReport');

    td.forEach(async function (value) {


Scenario("Generate all State Reports @allstatereport ", async (I) => {

    

        I_report.ReportMenu();
        I_report.GenerateStateReportPage();
        I.waitForText('Generate State Reports', 30);
        I_report.ReportsCategory(value.ReportCategory);
        // let holders = value.HolderList;
        // let x;
        // for (x of holders) {
        //     I_report.SelectHolder(x);
        // }
        I_report.SelectHolder(value.HolderList);
        I_report.SelectHolder(value.HolderList2)
        I_report.ReportGroup(value.ReportGroup);
        I_report.ReportDetails(value.ReportDetail);
        I_report.DatePaid(data.report.DatePaid);
        I_report.StateTable();
        // let states = value.States;
        // let y;
        // for(y of states) {
        // await I_report.ReportTypeZ(value.ReportType, y);
        // }
        await I_report.ReportTypeZ(value.ReportType, value.States);
        I.wait(2);
        I_report.GenerateStateReport();
        I.waitForText('Report History', 30);
    });
});

Scenario("Submit State Report @submitreport ", async (I) => {

    // I_report.ReportMenu();
    // I_report.GenerateStateReportPage();
    // I.waitForText('Generate State Reports', 30);
    // I_report.ReportsCategory(data.submitreport.ReportCategory);
    // let holders = data.submitreport.HolderList;
    // let x;
    // for (x of holders) {
    //     I_report.SelectHolder(x);
    // }
    // I_report.ReportGroup(data.submitreport.ReportGroup);
    // I_report.ReportDetails(data.submitreport.ReportDetail);
    // I_report.DatePaid(data.submitreport.DatePaid);
    // I_report.StateTable();
    let states = data.submitreport.StateList;
    // let y;
    // for (y of states) {
    //     await I_report.ReportTypeZ(data.submitreport.ReportType, y);
    // }
    // I_report.GenerateStateReport();
    // I.waitForText('Report History', 30);

    let z;
    for (z of states) {
        I_report.ReportMenu();
        I.click('//a[contains(text(),"State Report Overview")]');
        I.waitForText('State Report Overview', 30)
        I.waitForElement("//div[contains(text(),'" + data.submitreport.HolderList + "')]/following-sibling::div[text()='" + z + "']",60);
        I.click("//div[contains(text(),'" + data.submitreport.HolderList + "')]/following-sibling::div[text()='" + z + "']");
        I.wait(2);
        I.click('//span[contains(text(),"View")]');
        I.waitForText('Submit State Report', 30);
        if (z === 'MD') {
            I.waitForText('Verification Checklist', 30);
            I.attachFile('#ctl00_cphBody_VerificationChecklist-fileBrowse', 'uploads/VerificationChecklist.pdf');
            I.wait(2);
            I.click('#ctl00_cphBody_VerificationChecklist-fileUploader');
            I.wait(10);
            I.attachFile('#ctl00_cphBody_SafeDepositVerificationChecklist-fileBrowse', 'uploads/SafeDepositBox.pdf');
            I.wait(2);
            I.click('#ctl00_cphBody_SafeDepositVerificationChecklist-fileUploader');
            I.wait(10);
            I.click('//span[contains(text(),"Save")]');
            I.wait(10);
            I.click('//span[@class="tpro-btn-icon-label"][contains(text(),"Submit")]')
            I.waitForText('Report History', 30);
        }
        else if (z === 'AK' || z === 'UT' || z === 'VT') {
            I.waitForText('Verification Checklist', 30);
            I.attachFile('#ctl00_cphBody_VerificationChecklist-fileBrowse', 'uploads/VerificationChecklist.pdf');
            I.wait(10);
            I.click('#ctl00_cphBody_VerificationChecklist-fileUploader');
            I.click('//button[@id="ctl00_cphBody_VerificationChecklist-fileUploader"]')
            I.wait(2);
            I.click('//span[contains(text(),"Save")]');
            I.wait(10);
            I.click('//span[@class="tpro-btn-icon-label"][contains(text(),"Submit")]')
            I.waitForText('Report History', 30);

        }
        else {
            I.wait(10);
            I.click('//span[@class="tpro-btn-icon-label"][contains(text(),"Submit")]')
            I.waitForText('Report History', 30);
        }
    }

});


Scenario("Generate State Report @test ", async (I) => {

    I_report.ReportMenu();
    I_report.GenerateStateReportPage();
    I.waitForText('Generate State Reports', 30);
    I_report.ReportsCategory(data.report.ReportCategory);
    let holders = data.report.HolderList;
    let x;
    for (x of holders) {
        I_report.SelectHolder(x);
    }
    I_report.ReportGroup(data.report.ReportGroup);
    I_report.ReportDetails(data.report.ReportDetail);
    I_report.DatePaid(data.report.DatePaid);
    I_report.StateTable();
    pause();
    (async () => {
        const browser = await puppeteer.launch({})
        const page = await browser.newPage()
        await page.setViewport({ width: 1200, height: 800 })
    
    const scrollable_section = '.section-listbox .section-listbox';
    
    await page.waitForSelector('.section-listbox .section-listbox > .section-listbox');
    
    await page.evaluate(selector => {
      const scrollableSection = document.querySelector(selector);
    
      scrollableSection.scrollTop = scrollableSection.offsetHeight;
    }, scrollable_section);
    
    })
    
    I_report.GenerateStateReport();
    I.waitForText('Report History', 30);

});
