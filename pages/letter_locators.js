const { I } = inject();

module.exports = {

  // insert your locators and methods here

_init() {

  I = require('../steps_file.js')();
},

  locators: {
   ownerNotificationpage    : '//a[contains(text(),"Owner Notification")]',
   generateNotificationpage : '//a[contains(text(),"Generate Notification Letters")]',
   selectAllStates          : '//div[@id="letterGenerationStateGrid-table"]//span[@class="checkbox checkbox-select-all"]',
   letterCategory           : '#ctl00_cphBody_catSelector_category-combo-text',
   letterTemplate           : '#ctl00_cphBody_catSelector_items-combo-text',
   letterFinalize           : '#ctl00_cphBody_btnNotificationType_1',
   generateLetter           : '#ctl00_cphToolbarItemsRight_iconBtnGenerate',
   ryanmailConfirm          : '#btnUpmsWarningGenerateLetters'

    
  },


    OwnerNotificationMenu() {
    I.click(this.locators.ownerNotificationpage)
    },

    GenerateNotificationPage() {
    I.click(this.locators.generateNotificationpage);
    },

    SelectHolder(holdername){
    I.click("//div[contains(text(),'" + holdername + "')]");
    },
  
    SelectAllStates() {
    I.click(this.locators.selectAllStates);
    },

    SelectLetterCategory(LetterCategory) {
    I.click(this.locators.letterCategory);
    I.fillField(this.locators.letterCategory,LetterCategory);
    I.pressKey(['Tab','Tab']);
    },

    SelectLetterTemplate(LetterTemplate) {
    I.click(this.locators.letterTemplate);
    I.fillField(this.locators.letterTemplate,LetterTemplate);
    I.pressKey(['Tab','Tab']);
    },
   
    FinalizeLetter() {
    I.scrollTo(this.locators.letterFinalize);
    I.click(this.locators.letterFinalize);
    },

    GenerateLetter() {
    I.click(this.locators.generateLetter);
    },

    ConfirmRyanMail() {
    I.click(this.locators.ryanmailConfirm);
    }



}
