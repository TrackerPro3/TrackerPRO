Feature('Owner Notification');

let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let Letters = require('C:/Users/RC08508/CodeceptJS/pages/letter_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');
let pup = require('../utilities/pup.js');



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




// var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Letter');
// td.forEach(function (value) {
// Scenario("Generate '" + value.LetterType + "' + Letter @letter ", (I) => {

    Scenario("Generate Letter @letter ", ({ I }) => {
    var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Letter');
    td.forEach(function (value) {
  

    I.say(value.LetterType, 'red')
    Letters.OwnerNotificationMenu();
    Letters.GenerateNotificationPage();
    Letters.SelectHolder(data.letter.HolderName);
    Letters.SelectAllStates();
    Letters.SelectLetterCategory(value.LetterCategory);
    Letters.SelectLetterTemplate(value.LetterTemplate);
    I.wait(2);
    I.checkOption(value.Option1);
    I.checkOption(value.Option2);
    Letters.FinalizeLetter();
    Letters.GenerateLetter();
    

  });

})


// var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'RyanMail');
// td.forEach(function (value) {
// Scenario("Generate '" + value.LetterType + "' + Letter @ryanmail", (I) => {


    Scenario("Generate RyanMail Letter @ryanmail", ({ I }) => {
    var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'RyanMail');
    td.forEach(function (value) {

    Letters.OwnerNotificationMenu();
    Letters.GenerateNotificationPage();
    I.waitForText('Generate Notification Letters', 30);
    I.wait(5);
    Letters.SelectHolder(data.letter.HolderName);
    I.wait(5);
    Letters.SelectAllStates();
    Letters.SelectLetterCategory(value.LetterCategory);
    Letters.SelectLetterTemplate(value.LetterTemplate);
    I.wait(2);
    I.checkOption(value.Option1);
    I.checkOption(value.Option2);
    I.wait(2);
    I.checkOption('Send by RyanMail');
    I.wait(3);
    I.checkOption('Override Return Address');
    I.checkOption('Override Notification Type');
    Letters.FinalizeLetter();
    I.wait(2);
    Letters.GenerateLetterRyanMail();
    I.wait(2);
    if (value.LetterType.indexOf('DDL') != -1) {
      I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
    }
    Letters.ConfirmRyanMail();
    I.see('Report History');

  });

})



// Scenario("RyanMail Status Page @ryanmailPage ", (I) => {
 
// I.click('#ctl00_reportHistoryLink');
// I.waitForText('Report History',30);
// I.pressKey(['Shift']);
// I.click('//a[@id="grid-refresh"]//i[@class="fa fa-refresh"]');
// pause();
// I.click('(//a[contains(text(),"Template (RyanMail)")])[1]');
// I.click('//span[contains(text(),"Send")]');
// I.waitForText('Report History',30);
// I.click('RyanMail')
// I.click('#ctl00_cphToolbarItemsRight_toolbarViewButton');



// // (//button[@type="button" and @class="btn btn-link position-relative"])[3]
// //i[@class="fa-fw mr-2 fa fa-download ng-star-inserted"]





// });

// Scenario("RyanMail Status Page2", async (I) => {
 
//   I.click('#ctl00_reportHistoryLink');
//   I.waitForText('Report History',30);
//   I.wait(3);
//   pup.holdKey();
//   I.click('//a[@id="grid-refresh"]//i[@class="fa fa-refresh"]');
//   pup.releaseKey();
//   I.wait(5)
//   I.click('(//a[contains(text(),"Template (RyanMail)")])[1]');
//   I.wait(30)


//   pup.iframe();


//   // I.click('//span[contains(text(),"Send")]');
//   // I.waitForText('Report History',30);
//   // I.click('#ctl00_cphToolbarItemsRight_toolbarViewButton');
// //   await within({frame: "#aceFrame"}, () => {
// //     I.wait(5);
// //     I.click('(//button[@type="button" and @class="btn btn-link position-relative"])[3]')

// //     I.click('//span[contains(text(),"Recipient")]')
// // });
// // pause();
// // I.switchTo('#aceFrame');
// // pause();
// // let pagesource = await I.grabSource();
// // console.log(pagesource);

// // I.switchTo();
// // let pagesource2 = await I.grabSource();
// // console.log(pagesource2);


// // I.click('//span[contains(text(),"Recipient")]')


// I.wait(10);

// });


// // After(() => {
// //   pup.closeBrowser();
// // })
