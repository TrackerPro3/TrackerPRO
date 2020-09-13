const puppeteer = require('puppeteer');
Feature('State Reporting');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let I_report = require('C:/Users/RC08508/CodeceptJS/pages/reports_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');


Scenario("Generate State Report", async (I) => {

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




Scenario("Generate all State Reports ", async (I) => {

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




Scenario("Generate State Report2 ", async (I) => {

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
