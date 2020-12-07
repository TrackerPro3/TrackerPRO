const { I } = inject();

module.exports = {

    // insert your locators and methods here

    _init() {

        I = require('../steps_file.js')();
    },

    locators: {
        securityMenu: '//a[@class="dropdown-toggle"][contains(text(),"Security")]',
        securityAdminPage: '//a[contains(text(),"Security Administration")]',
        filetypeAdd: '//button[@id="ctl00_cphBody_fileUploadTypeGrid_add"]',
        filetypeExt: '#ctl00_cphBody_txtFileExtension',
        filetypeMIME: '#ctl00_cphBody_txtFileMimeType',
        filetypeSave: '//div[@id="tpro-fileType-dialog"]//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]',
        securityAdminSave: '//a[@id="ctl00_cphToolbarItemsRight_toolbarSaveButton"]',
    },


    SecurityMenu() {
        I.click(this.locators.securityMenu);
    },

    SecurityAdmin() {
        I.click(this.locators.securityAdminPage);
        // I.waitForNavigation();
        I.waitForText('Security Administration', 30);
    },

    FileTypeAdd() {
        I.scrollTo(this.locators.filetypeAdd);
        I.click(this.locators.filetypeAdd);
        I.waitForText('File Type', 10);
    },

    FileTypeExt(Extension) {
        I.click(this.locators.filetypeExt);
        I.fillField(this.locators.filetypeExt, Extension);
    },

    FileTypeMIME(MimeType) {
        I.click(this.locators.filetypeMIME);
        I.fillField(this.locators.filetypeMIME, MimeType);
    },

    FileTypeSave() {
        I.click(this.locators.filetypeSave)
    },

    SecurityAdminSave() {
        I.waitForEnabled(this.locators.securityAdminSave, 10);
        I.click(this.locators.securityAdminSave);
        I.waitForText('Security Settings saved successfully', 20);
    },

}
