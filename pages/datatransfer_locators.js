const { I } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

    I = require('../steps_file.js')();
  },

  locators: {
    dataMenu: '//a[@class="dropdown-toggle"][contains(text(),"Data")]',
    importDataPage: '//a[contains(text(),"Import Data")]',
    holderCombo: '#cboHolder-combo-text',
    xmlMapping: '#ctl00_cphBody_cboFileMappingName',
    browseFile: '#ctl00_cphBody_DataImportFile-fileBrowse',
    uploadFile: '#ctl00_cphBody_DataImportFile-fileUploader',
    importFile: '#ctl00_cphToolbarItemsRight_toolbarImportButton',
  },


  DataMenu() {
    I.click(this.locators.dataMenu);
  },

  ImportDataPage() {
    I.click(this.locators.importDataPage);
    I.waitForNavigation();
    I.waitForText('Import Data',30);
  },

  SelectMapping(MappingType,HolderName) {
    if(MappingType==='TEXT') {
      I.click(this.locators.holderCombo);
      I.fillField(this.locators.holderCombo,HolderName)
      I.pressKey(['Tab', 'Tab']);
    }
    else if(MappingType==='XML') {
      I.selectOption(this.locators.xmlMapping,'Tracker PRO XML Layout');
      I.waitForText('Tracker PRO XML Layout',20);
    }
  },

  BrowseFile(FileName) {
    I.attachFile(this.locators.browseFile,FileName);
  },

  UploadFile() {
    I.waitForEnabled(this.locators.uploadFile,10);
    I.click(this.locators.uploadFile);
  },

  ImportFile() {
    I.waitForEnabled(this.locators.importFile,50);
    I.wait(2);
    I.forceClick(this.locators.importFile);
    I.waitForText('Report History',30);
  }














}