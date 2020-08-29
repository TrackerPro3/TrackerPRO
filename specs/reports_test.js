// var scrollIntoView = require('scroll-into-view');
var scrollToElement = require('scroll-to-element');

Feature('State Reporting');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let I_report = require('C:/Users/RC08508/CodeceptJS/pages/reports_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let xl = require('C:/Users/RC08508/CodeceptJS/testdata/multidata.js');




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

// Scenario("Generate State Report @singlestatereport ", async (I) => {

//     I_report.ReportMenu();
//     I_report.GenerateStateReportPage();
//     I.waitForText('Generate State Reports', 30);
//     I_report.ReportsCategory(data.report.ReportCategory);
//     I_report.SelectHolder(data.report.HolderName);
//     I_report.ReportGroup(data.report.ReportGroup);
//     I_report.ReportDetails(data.report.ReportDetail);
//     I_report.DatePaid(data.report.DatePaid);
//     I_report.StateTable();
//     I_report.ReportType(data.report.ReportType, data.report.State);
//     I_report.GenerateStateReport();
//     I.waitForText('Report History', 30);
//     I.wait(10); 

// });

Scenario("Generate State Report @multistatereport ", async (I) => {

    I_report.ReportMenu();
    I_report.GenerateStateReportPage();
    I.waitForText('Generate State Reports', 30);
    I_report.ReportsCategory(data.report.ReportCategory);
    I_report.SelectHolder();
    I_report.SelectHolder();
    I_report.SelectHolder();
    I_report.ReportGroup(data.report.ReportGroup);
    I_report.ReportDetails(data.report.ReportDetail);
    I_report.DatePaid(data.report.DatePaid);
    I_report.StateTable();
    I_report.ReportType();
    I_report.ReportType();
    I_report.ReportType();
    I_report.GenerateStateReport();
    I.waitForText('Report History', 30);

});

// Scenario("Generate all Reports @allstatereport ", (I) => {

//     var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Report');

//     td.forEach(function (value) {

//         I_report.ReportMenu();
//         I_report.GenerateStateReportPage();
//         I.waitForText('Generate State Reports', 30);
//         I_report.ReportsCategory(data.report.ReportCategory);
//         I_report.SelectHolder(data.report.HolderName);
//         I_report.ReportGroup(data.report.ReportGroup);
//         I_report.ReportDetails(data.report.ReportDetail);
//         I_report.DatePaid(data.report.DatePaid);
//         I_report.StateTable();
//         I_report.ReportType(data.report.ReportType, value.States);
//         I_report.GenerateStateReport();
//         I.waitForText('Report History', 30);

//     });

// });


