Feature('Owner Notification');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let I_letter = require('C:/Users/RC08508/CodeceptJS/pages/letter_locators.js');
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


var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx','Letter');

td.forEach(function(value) {


Scenario("Generate '" + value.LetterType + "' Letter @letter ", (I) => {

  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory(value.LetterCategory);
  I_letter.SelectLetterTemplate(value.LetterTemplate);
  I.checkOption(value.Option1);
  I.checkOption(value.Option2);
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

});

})


var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx','RyanMail');

td.forEach(function(value) {


Scenario("Generate '" + value.LetterType + "' + Letter @ryanmail", (I) => {

  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory(value.LetterCategory);
  I_letter.SelectLetterTemplate(value.LetterTemplate);
  I.checkOption(value.Option1);
  I.checkOption(value.Option2);
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  if(value.LetterType.indexOf('DDL') != -1)
      {
      I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
      }
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

});

})
