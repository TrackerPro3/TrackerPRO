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
    letterCategory: '#ctl00_cphBody_catSelector_category-combo-text',
    letterTemplate: '#ctl00_cphBody_catSelector_items-combo-text',
    letterFinalize: '#ctl00_cphBody_btnNotificationType_1',
    generateLetter: '#ctl00_cphToolbarItemsRight_iconBtnGenerate',
    ryanmailConfirm: '#btnUpmsWarningGenerateLetters'


  },


  OwnerNotificationMenu() {
    I.waitForVisible(this.locators.ownerNotificationMenu,10);
    I.click(this.locators.ownerNotificationMenu);
    I.waitForNavigation();
  },

  GenerateNotificationPage() {
    I.click(this.locators.generateNotificationpage);
    I.waitForNavigation();
    I.waitForText('Generate Notification Letters', 30);
  },

  SelectHolder(holdername) {
    I.wait(5);
    I.click("//div[contains(text(),'" + holdername + "')]");
  },

  SelectAllStates() {
    I.wait(5);
    I.click(this.locators.selectAllStates);
  },

  SelectLetterCategory(LetterCategory) {
    I.click(this.locators.letterCategory);
    I.fillField(this.locators.letterCategory, LetterCategory);
    I.pressKey(['Tab', 'Tab']);
  },

  SelectLetterTemplate(LetterTemplate) {
    I.click(this.locators.letterTemplate);
    I.fillField(this.locators.letterTemplate, LetterTemplate);
    I.pressKey(['Tab', 'Tab']);
  },

  FinalizeLetter() {
    I.scrollTo(this.locators.letterFinalize);
    I.click(this.locators.letterFinalize);
  },

  GenerateLetter() {
    I.wait(2);
    I.click(this.locators.generateLetter);
    I.waitForText('Report Selection', 30);
  },

  ConfirmRyanMail() {
    I.click(this.locators.ryanmailConfirm);
  },

  // LetterCheck() {
  //   if(value.LetterType.indexOf('DDL') != -1)
  //   {
  //   I.checkOption('By selecting the checkbox, I agree to the letter format change chosen knowing it could affect the way the letter looks or the number of pages generated.');
  //   }
  // }



}
