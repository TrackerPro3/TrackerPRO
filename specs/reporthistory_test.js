
Feature('Report History');

// let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
// let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');

Before(async ({ loginAs }) => { // or Background
  await loginAs('Surya');
});

  Scenario("Download Files", async ({ I }) => {
    // await loginAs('Surya');
    I.click('#ctl00_reportHistoryLink');
    I.waitForNavigation();
    I.waitForText('Report History',30);
    I.click('//a[@id="grid-refresh"]//i[@class="fa fa-refresh"]');
    I.wait(3)
    // I.handleDownloads();
    // I.click('Advanced Due Diligence Template');
    // I.amInPath('output/downloads');
    // I.wait(10)
    // I.seeFile('Advanced Due Diligence Template.pdf');
    // I.seeFileContentsEqualReferenceFile('misc/test.txt')
    // I.seeInThisFile('misc/test.txt');


  });

  Scenario("Export 2", async ({ I }) => {
    I.click('#ctl00_reportHistoryLink');
    I.waitForNavigation();
    I.waitForText('Report History',30);
    // I.click('//a[@id="grid-refresh"]//i[@class="fa fa-refresh"]');
    // I.wait(3)
    // I.handleDownloads();
    // I.click('Advanced Due Diligence Template');
    // I.amInPath('output/downloads');
    // I.wait(10)
    // I.seeFile('Advanced Due Diligence Template.pdf');
    // I.seeFileContentsEqualReferenceFile('misc/test.txt')
    // I.seeInThisFile('misc/test.txt');


  });

