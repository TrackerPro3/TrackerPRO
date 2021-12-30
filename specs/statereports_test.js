const puppeteer = require('puppeteer');
var scrollElement = require('scroll-element');
var scrollToElement = require('scroll-to-element');
var scrollIntoView = require('scroll-into-view');



Feature('State Reporting');

let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let StateReports = require('C:/Users/RC08508/CodeceptJS/pages/statereports_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');
let scroll = require('../utilities/scroll.js');


Before(async ({ I }) => { // or Background
    Login.SelectBuild(data.login.Build);   // input Build Name
  Login.Username(data.login.Username);    // input Username
  Login.Password(data.login.defaultPassword); // input default Password
  Login.ActualPassword(await I.grabTextFrom(Login.locators.alertContent), data.login.Password);   // input Password
  // Login.ActualPassword(data.login.Password);   // input Password
  Login.MustChange(await I.grabTitle(),data.login.newPassword);   // input New Password
  Login.OrgPage(await I.grabTitle(),data.login.Org);     // input Org Name
});


// After(() => {
//     pup.closeBrowser();
//   })

Scenario("Generate State Report @statereport ", async ({ I }) => {

    StateReports.ReportMenu();
    StateReports.GenerateStateReportPage();
    I.waitForText('Generate State Reports', 30);
    StateReports.ReportsCategory(data.report.ReportCategory);
    let holders = data.report.HolderList;
    let x;
    for (x of holders) {
        StateReports.SelectHolder(x);
    }
    StateReports.ReportGroup(data.report.ReportGroup);
    StateReports.ReportDetails(data.report.ReportDetail);
    StateReports.DatePaid(data.report.DatePaid);
    StateReports.StateTable();
    let states = data.report.StateList1;
    let y;
    for (y of states) {
        await StateReports.ReportTypeZ(data.report.ReportType, y);
    }
    StateReports.GenerateStateReport();
    I.waitForText('Report History', 30);

});

var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'StateReport');



td.forEach(async function (value) {


    Scenario("Generate all State Reports @allstatereport ", async ({ I }) => {

        StateReports.ReportMenu();
        StateReports.GenerateStateReportPage();
        I.waitForText('Generate State Reports', 30);
        StateReports.ReportsCategory(value.ReportCategory);

        var td1 = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/StateReporting.xlsx', 'Holders');
            td1.forEach(async function (value1) {
                StateReports.SelectHolder(value1.Holders)
            })

        StateReports.ReportGroup(value.ReportGroup);
        StateReports.ReportDetails(value.ReportDetail);
        StateReports.DatePaid(value.DatePaid);
        StateReports.StateTable();

        var td2 = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/StateReporting.xlsx', 'States');
        td2.forEach(async function (value2) {
            console.log(value.ReportType)
            StateReports.ReportTypeZ(value.ReportType,value2.States)
        })
     


        // await StateReports.ReportTypeZ(value.ReportType, value.States);
        I.wait(2);
        StateReports.GenerateStateReport();
        I.waitForText('Report History', 30);
    });
});

Scenario("Submit State Report @submitreport ", async ({ I }) => {

    // StateReports.ReportMenu();
    // StateReports.GenerateStateReportPage();
    // I.waitForText('Generate State Reports', 30);
    // StateReports.ReportsCategory(data.submitreport.ReportCategory);
    // let holders = data.submitreport.HolderList;
    // let x;
    // for (x of holders) {
    //     StateReports.SelectHolder(x);
    // }
    // StateReports.ReportGroup(data.submitreport.ReportGroup);
    // StateReports.ReportDetails(data.submitreport.ReportDetail);
    // StateReports.DatePaid(data.submitreport.DatePaid);
    // StateReports.StateTable();
    let states = data.submitreport.StateList;
    // let y;
    // for (y of states) {
    //     await StateReports.ReportTypeZ(data.submitreport.ReportType, y);
    // }
    // StateReports.GenerateStateReport();
    // I.waitForText('Report History', 30);

    let z;
    for (z of states) {
        StateReports.ReportMenu();
        I.click('//a[contains(text(),"State Report Overview")]');
        I.waitForText('State Report Overview', 30)
        I.waitForElement("//div[contains(text(),'" + data.submitreport.HolderList + "')]/following-sibling::div[text()='" + z + "']", 60);
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


Scenario("Generate State Report @test ", async ({ I }) => {

    StateReports.ReportMenu();
    
    StateReports.GenerateStateReportPage();
    I.waitForText('Generate State Reports', 30);
    StateReports.ReportsCategory(data.report.ReportCategory);
    let holders = data.report.HolderList;
    let x;
    for (x of holders) {
        StateReports.SelectHolder(x);
    }
    StateReports.ReportGroup(data.report.ReportGroup);
    StateReports.ReportDetails(data.report.ReportDetail);
    StateReports.DatePaid(data.report.DatePaid);
    StateReports.StateTable();
    // I.scrollTo("//div[contains(text(),'TN')]/following-sibling::div[2]/div",0,10)

    // scrollElement.scrollToElement("//div[contains(text(),'TN')]/following-sibling::div[2]/div");
    // scrollElement.scrollWindowToElement("//div[contains(text(),'TN')]/following-sibling::div[2]/div")
    scroll.scroll();
    I.click("//div[contains(text(),'TN')]/following-sibling::div[2]/div");

    StateReports.GenerateStateReport();
    I.waitForText('Report History', 30);

});
