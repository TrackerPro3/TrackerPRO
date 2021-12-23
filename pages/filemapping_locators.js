const { I } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

  I = require('../steps_file.js')();
  },

  locators: {
    dataMenu: '(//a[contains(text(),"Data")])[1]',
    createFileMapping: '//a[contains(text(),"Create File Mapping")]',
    mappingName: '#txtMappingName',   //#txtMappingName ,//input[@id="ctl00_cphBody_txtMappingName"]
    mappingDesc: '#txtFileMappingDesc',  //#txtFileMappingDesc, //textarea[@id="ctl00_cphBody_txtFileMappingDesc"]
    mappingType: '//input[@id="cboFileFormat-combo-text"]',
    delimiterType: '#ctl00_cphBody_txtDelimiter',
    mappingfieldAdd: '//button[@id="ctl00_cphBody_fileMappingDataJsonGrid_add"]',
    externalField: '#ctl00_cphBody_txtExternalColumn',
    columnIndex: '#ctl00_cphBody_txtColumnIndexField',
    trackerproField: '//input[@id="cboFriendlyName-combo-text"]',
    fieldType: '#cboDataType-combo-text',
    fieldFormat: '#cboDataFormat-combo-text',
    fieldSave: '//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]',
    mappingSave: '//span[contains(text(),"Save")]',

},


DataMenu() {
    I.click(this.locators.dataMenu);
},

CreateFileMapping() {
    I.click(this.locators.createFileMapping);
    I.waitForText('File Mapping Detail', 30);
},

MappingName(MappingName) {
    I.click(this.locators.mappingName);
    I.fillField(this.locators.mappingName, MappingName);
},

MappingDesc(MappingDesc) {
    I.click(this.locators.mappingDesc);
    I.fillField(this.locators.mappingDesc, MappingDesc);
},

MappingType(MappingType,Delimiter) {
    I.click(this.locators.mappingType);
    I.fillField(this.locators.mappingType, MappingType);
    I.pressKey(['Tab', 'Tab']);
    if(MappingType=='Delimited') {
        I.fillField(this.locators.delimiterType,Delimiter);
    }
},

AddMappingFields() {
    I.click(this.locators.mappingfieldAdd);
    I.waitForText('Add Field', 10);
},

ExternalField(ExternalField) {
    I.click(this.locators.externalField);
    I.fillField(this.locators.externalField, ExternalField);
},

ColumnIndex(ColumnIndex) {
    I.click(this.locators.columnIndex);
    I.fillField(this.locators.columnIndex, ColumnIndex);
},

TrackerproField(TrackerproField) {
    I.click(this.locators.trackerproField);
    I.fillField(this.locators.trackerproField, TrackerproField);
    I.pressKey(['Tab', 'Tab']);
},

FieldType(FieldType) {
    I.click(this.locators.fieldType);
    I.fillField(this.locators.fieldType, FieldType);
    I.pressKey(['Tab', 'Tab']);
},

FieldFormat(FieldFormat) {
    I.click(this.locators.fieldFormat);
    I.fillField(this.locators.fieldFormat, FieldFormat);
    I.pressKey(['Tab', 'Tab']);
},

SaveMappingFields() {
    I.click(this.locators.fieldSave);

},

SaveFileMapping() {
    I.waitForEnabled(this.locators.mappingSave);
    I.click(this.locators.mappingSave);
},

}
