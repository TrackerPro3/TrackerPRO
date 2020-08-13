
Feature('RyanMail');

let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');


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


Scenario('Add Return Address', (I) => {

});

Scenario('Generate RyanMail for Basic DDL Letter', (I) => {

  I.say('Generate Normal Letters');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text', 'D');
  I.pressKey(['Tab', 'Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'B');
  I.pressKey(['Tab', 'Tab']);
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.wait(3);
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text', 'D');
  I.pressKey(['Tab', 'Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'B');
  I.pressKey(['Tab', 'Tab']);
  I.wait(2);
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create One Letter per Owner');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text', 'D');
  I.pressKey(['Tab', 'Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'B');
  I.pressKey(['Tab', 'Tab']);
  I.wait(2);
  I.checkOption('Create One Letter per Owner');
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners/Create One Letter per Owner');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text', 'D');
  I.pressKey(['Tab', 'Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'B');
  I.pressKey(['Tab', 'Tab']);
  I.wait(2);
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');
});



Scenario('Generate RyanMail for Advanced DDL Letter', (I) => {

  I.say('Generate Normal Letters');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text', 'D');
  I.pressKey(['Tab', 'Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'A');
  I.pressKey(['Tab', 'Tab']);
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text', 'D');
  I.pressKey(['Tab', 'Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'A');
  I.pressKey(['Tab', 'Tab']);
  I.wait(2);
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create One Letter per Owner');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text', 'D');
  I.pressKey(['Tab', 'Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'A');
  I.pressKey(['Tab', 'Tab']);
  I.wait(2);
  I.checkOption('Create One Letter per Owner');
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners/Create One Letter per Owner');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text', 'D');
  I.pressKey(['Tab', 'Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'A');
  I.pressKey(['Tab', 'Tab']);
  I.wait(2);
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');
});


Scenario('Generate RyanMail for Search Letter', (I) => {

  I.say('Generate Normal Letters');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters',30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','Se');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','B');
  I.pressKey(['Tab','Tab']);
  I.wait(2);
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection',30);
  I.see('Report Selection');

  I.say('Create Letters for Additional Owners');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters',30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','Se');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','B');
  I.pressKey(['Tab','Tab']);
  I.wait(2);
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection',30);
  I.see('Report Selection');

  I.say('Create One Letter per Owner');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters',30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','Se');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','B');
  I.pressKey(['Tab','Tab']);
  I.wait(2);
  I.checkOption('Create One Letter per Owner');
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection',30);
  I.see('Report Selection');
  
  I.say('Create Letters for Additional Owners/Create One Letter per Owner');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters',30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','Se');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','B');
  I.pressKey(['Tab','Tab']);
  I.wait(2);
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.checkOption('Send by RyanMail');
  I.checkOption('Override Return Address');
  I.checkOption('Override Notification Type');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.wait(2);
  I.click('#btnUpmsWarningGenerateLetters');
  I.waitForText('Report Selection',30);
  I.see('Report Selection');
});



