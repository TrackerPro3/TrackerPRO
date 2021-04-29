const { I } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

    I = require('../steps_file.js')();
  },

  locators: {
    ownerNotificationMenu: '//a[contains(text(),"Owner Notification")]',
    generateNotificationpage: '//a[contains(text(),"Generate Notification Letters")]',
    selectAllStates: '//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]',
    letterCategory: '#catSelector_category-combo-text', 
    letterTemplate: '#catSelector_items-combo-text', 
    letterFinalize: '#btnNotificationType_1',
    generateLetter: '#iconBtnGenerate',
    // letterCategory: '#ctl00_cphBody_catSelector_category-combo-text',
    // letterTemplate: '#ctl00_cphBody_catSelector_items-combo-text',
    // letterFinalize: '#ctl00_cphBody_btnNotificationType_1',
    // generateLetter: '#ctl00_cphToolbarItemsRight_iconBtnGenerate',
    ryanmailConfirm: '#btnUpmsWarningGenerateLetters'


  },


  OwnerNotificationMenu() {
    I.waitForVisible(this.locators.ownerNotificationMenu,10);
    I.click(this.locators.ownerNotificationMenu);
  },

  GenerateNotificationPage() {
    I.waitForVisible(this.locators.generateNotificationpage,10);
    I.click(this.locators.generateNotificationpage);
    // I.waitForNavigation();
    I.waitForText('Generate Notification Letters', 30);
  },

  SelectHolder(holdername) {
    I.waitForText(holdername,10);
    I.wait(3);
    I.click("//div[contains(text(),'" + holdername + "')]");
  },

  SelectAllStates() {
    I.waitForVisible(this.locators.selectAllStates,10);
    I.wait(5);
    I.click(this.locators.selectAllStates);
  },

  SelectLetterCategory(LetterCategory) {
    I.waitForVisible(this.locators.letterCategory,10);
    I.click(this.locators.letterCategory);
    I.fillField(this.locators.letterCategory, LetterCategory);
    I.pressKey(['Tab', 'Tab']);
  },

  SelectLetterTemplate(LetterTemplate) {
    I.waitForVisible(this.locators.letterTemplate,10);
    I.click(this.locators.letterTemplate);
    I.fillField(this.locators.letterTemplate, LetterTemplate);
    I.pressKey(['Tab', 'Tab']);
  },

  FinalizeLetter() {
    I.waitForVisible(this.locators.letterFinalize,10);
    I.scrollTo(this.locators.letterFinalize);
    I.click(this.locators.letterFinalize);
  },

  GenerateLetter() {
    I.waitForVisible(this.locators.generateLetter,10);
    I.wait(2);
    I.click(this.locators.generateLetter);
    // I.waitForText('Report Selection', 30);
    I.wait(10);
    I.waitForText('Report History',30);
  },

  GenerateLetterRyanMail() {
    I.waitForVisible(this.locators.generateLetter,10);
    I.wait(2);
    I.click(this.locators.generateLetter);
  },

  ConfirmRyanMail() {
    I.waitForVisible(this.locators.ryanmailConfirm,10);
    I.click(this.locators.ryanmailConfirm);
    I.wait(10);
    I.waitForText('Report History',30);
  },

  // LetterCheck() {
  //   if(value.LetterType.indexOf('DDL') != -1)
  //   {
  //   I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  //   }
  // }



}
