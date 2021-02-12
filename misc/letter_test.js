
Feature('Owner Notification');

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


Scenario('Generate Basic DDL Letter', ({ I }) => {

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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');
  
});



Scenario('Generate Advanced DDL Letter', ({ I }) => {

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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');
  
});


Scenario('Generate Search Letter', ({ I }) => {

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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');
 
});


Scenario('Generate State CD Letter', ({ I }) => {

  I.say('Generate Normal Letters');

  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('St');
  I_letter.SelectLetterTemplate('State C');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.SelectLetterCategory('St');
  I_letter.SelectLetterTemplate('State C');
  I.checkOption('Create Letters for Additional Owners');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.SelectLetterCategory('St');
  I_letter.SelectLetterTemplate('State C');
  I.checkOption('Create One Letter per Owner');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.SelectLetterCategory('St');
  I_letter.SelectLetterTemplate('State C');
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');
  
});



Scenario('Generate State Extension Letter', ({ I }) => {

  I.say('Generate Normal Letters');

  I_letter.OwnerNotificationMenu();
  I_letter.GenerateNotificationPage();
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I_letter.SelectHolder(data.letter.HolderName);
  I.wait(5);
  I_letter.SelectAllStates();
  I_letter.SelectLetterCategory('St');
  I_letter.SelectLetterTemplate('State E');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.SelectLetterCategory('St');
  I_letter.SelectLetterTemplate('State E');
  I.checkOption('Create Letters for Additional Owners');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.SelectLetterCategory('St');
  I_letter.SelectLetterTemplate('State E');
  I.checkOption('Create One Letter per Owner');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
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
  I_letter.SelectLetterCategory('St');
  I_letter.SelectLetterTemplate('State E');
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I_letter.FinalizeLetter();
  I.wait(2);
  I_letter.GenerateLetter();
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');
 
});

