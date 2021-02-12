
Feature('RyanMail');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let I_letter = require('C:/Users/RC08508/CodeceptJS/pages/letter_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');


Before(async ({ I }) => { // or Background
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


Scenario('Add Return Address', ({ I }) => {

});

Scenario('Generate RyanMail for Basic DDL Letter', ({ I }) => {

  I.say('Generate Normal Letters');
  
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('D');
  I_letter.SelectLetterTemplate('B');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners');
  
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('D');
  I_letter.SelectLetterTemplate('B');
  I.checkOption('Create Letters for Additional Owners');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create One Letter per Owner');
  
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('D');
  I_letter.SelectLetterTemplate('B');
  I.checkOption('Create One Letter per Owner');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners/Create One Letter per Owner');
 
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('D');
  I_letter.SelectLetterTemplate('B');
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

});



Scenario('Generate RyanMail for Advanced DDL Letter', ({ I }) => {

  I.say('Generate Normal Letters');
  
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('D');
  I_letter.SelectLetterTemplate('A');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners');
  
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('D');
  I_letter.SelectLetterTemplate('A');
  I.checkOption('Create Letters for Additional Owners');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create One Letter per Owner');

  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('D');
  I_letter.SelectLetterTemplate('A');
  I.checkOption('Create One Letter per Owner');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners/Create One Letter per Owner');
  
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('D');
  I_letter.SelectLetterTemplate('A');
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

});


Scenario('Generate RyanMail for Search Letter', ({ I }) => {

  I.say('Generate Normal Letters');
 
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('Se');
  I_letter.SelectLetterTemplate('B');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners');
  
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('Se');
  I_letter.SelectLetterTemplate('B');
  I.checkOption('Create Letters for Additional Owners');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create One Letter per Owner');
 
  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('Se');
  I_letter.SelectLetterTemplate('B');
  I.checkOption('Create One Letter per Owner');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners/Create One Letter per Owner');

  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('Se');
  I_letter.SelectLetterTemplate('B');
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.wait(2);
  I_letter.ConfirmRyanMail();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

});



