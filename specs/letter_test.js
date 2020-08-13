
Feature('TrackerPRO');

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


Scenario('Generate Basic DDL Letter', (I) => {

  I.say('Generate Normal Letters');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters', 30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  // var states = ['CA', 'MA'];
  // var x;
  // for (x of states) {
  //   I.scrollTo("//div[contains(text(),'" + x + "')]");
  //   I.click("//div[contains(text(),'" + x + "')]");
  // }
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text', 'D');
  I.pressKey(['Tab', 'Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'B');
  I.pressKey(['Tab', 'Tab']);
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.checkOption('Create Letters for Additional Owners');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');
});



Scenario('Generate Advanced DDL Letter', (I) => {

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
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.checkOption('Create Letters for Additional Owners');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.waitForText('Report Selection', 30);
  I.see('Report Selection');
});


Scenario('Generate Search Letter', (I) => {

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
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.checkOption('Create Letters for Additional Owners');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.waitForText('Report Selection',30);
  I.see('Report Selection');
});


Scenario('Generate State CD Letter', (I) => {

  I.say('Generate Normal Letters');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters',30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','St');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','State C');
  I.pressKey(['Tab','Tab']);
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','St');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','State C');
  I.pressKey(['Tab','Tab']);
  I.checkOption('Create Letters for Additional Owners');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','St');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','State C');
  I.pressKey(['Tab','Tab']);
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','St');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'State C');
  I.pressKey(['Tab','Tab']);
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.waitForText('Report Selection',30);
  I.see('Report Selection');
});



Scenario('Generate State Extension Letter', (I) => {

  I.say('Generate Normal Letters');
  I.click('//a[contains(text(),"Owner Notification")]');
  I.click('//a[contains(text(),"Generate Notification Letters")]');
  I.waitForText('Generate Notification Letters',30);
  I.wait(5);
  I.click('//div[contains(text(),"DDL")]');
  I.wait(5);
  I.click('//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]');
  I.click('#ctl00_cphBody_catSelector_category-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','St');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','State E');
  I.pressKey(['Tab','Tab']);
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','St');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','State E');
  I.pressKey(['Tab','Tab']);
  I.checkOption('Create Letters for Additional Owners');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','St');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text','State E');
  I.pressKey(['Tab','Tab']);
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
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
  I.fillField('#ctl00_cphBody_catSelector_category-combo-text','St');
  I.pressKey(['Tab','Tab']);
  I.click('#ctl00_cphBody_catSelector_items-combo-text');
  I.fillField('#ctl00_cphBody_catSelector_items-combo-text', 'State E');
  I.pressKey(['Tab','Tab']);
  I.checkOption('Create Letters for Additional Owners');
  I.checkOption('Create One Letter per Owner');
  I.scrollTo('#ctl00_cphBody_btnNotificationType_1');
  I.click('#ctl00_cphBody_btnNotificationType_1');
  I.wait(2);
  I.click('#ctl00_cphToolbarItemsRight_iconBtnGenerate');
  I.waitForText('Report Selection',30);
  I.see('Report Selection');
});

