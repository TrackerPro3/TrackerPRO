const { I } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

    I = require('../steps_file.js')();
  },

  locators: {
    holderOverview: "//ul[@id='quickLinkBar']//a[contains(text(),'Holder Overview')]",
    holderNew: "//span[contains(text(),'New')]",
    holderName: '#ctl00_cphBody_txtHolderCurrentName',
    holderEntity: '#ctl00_cphBody_txtLegalEntityName',
    holderClassification: '#cboHolderCurrentClassification-combo-text',
    holderFEIN: '#ctl00_cphBody_txtHolderCurrentFedId',
    holderAddress: '#ctl00_cphBody_txtHolderCurrentAddress1',
    holderCity: '#ctl00_cphBody_txtHolderCurrentCity',
    holderState: '#cboHolderCurrentState-combo-text',
    holderZip: '#ctl00_cphBody_txtHolderCurrentZip',
    holderINCState: '#cboHolderIncorporationState-combo-text',
    // holderSave : "//span[contains(text(),'Save')]",
    holderSave: "//span[@class='tpro-btn-icon-label' and text()='Save']",

    holderContactAdd: '#ctl00_cphBody_holderContactJsonGrid_add',
    // holderContactType : "//label[contains(text(),'" + contactTypeSelect + "')]",
    holderContactEmail: '#ctl00_cphBody_txtContactEmail',
    holderContactName: '#ctl00_cphBody_txtContactFullName',
    holderContactState: '#cboContactState-combo-text',
    holderContactSave: "//button[@class='btn btn-primary tpro_standard_button'][contains(text(),'OK')]",

    holderStateSpecific: "//span[@class='tpro-btn-icon-label' and text()='State Specific']",
    holderStateSpecificSave: '//span[contains(text(),"Save")]',
    holderStateSpecificClose: '#ctl00_cphToolbarItemsRight_toolbarCloseButton',

    holderAdditionalInfo: '//span[contains(text(),"Additional Holder Information")]',
    holderAddUDF: '#ctl00_cphBody_userDefinedFieldsJsonGrid_add',
    holderUDFName: '#ctl00_cphBody_txtDialogUdfName',
    holderUDFSave: '//div[@id="tpro-udf-dialog"]//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]',
    holderAddStatInd: '#ctl00_cphBody_statusIndicatorsJsonGrid_add',
    holderStatIndName: '#ctl00_cphBody_txtDialogStatusIndicatorName',
    holderStatIndDesc: '#ctl00_cphBody_txtDialogStatusIndicatorDescription',
    holderStatIndSave: '//div[@id="tpro-si-dialog"]//button[@class="btn btn-primary tpro_standard_button"][contains(text(),"OK")]',
    holderAdditionalInfoSave: '#ctl00_cphToolbarItemsRight_toolbarSaveButton',
    holderAdditionalInfoClose: '#ctl00_cphToolbarItemsRight_toolbarCloseButton'

  },

  HolderOverview() {
    I.retry(2).click(this.locators.holderOverview);
    // I.waitForNavigation();
  },

  NewHolder() {
    I.retry(2).click(this.locators.holderNew);
    I.waitForNavigation();
    I.waitForText('Holder Detail', 30);
  },

  HolderName(HolderName) {
    I.retry(2).fillField(this.locators.holderName, HolderName);
  },

  EntityName(EntityName) {
    I.retry(2).fillField(this.locators.holderEntity, EntityName);
  },

  Classification(Classification) {
    I.retry(2).click(this.locators.holderClassification);
    I.retry(2).fillField(this.locators.holderClassification, Classification)
    I.retry(2).pressKey(['Tab', 'Tab']);
  },


  // Classification(Classification) {

  //   var classifications = [Classification];
  //   var x;
  //   for (x of classifications) {
  //     I.retry(2).click(this.locators.holderClassification);
  //     I.retry(2).fillField(this.locators.holderClassification, x)
  //     I.retry(2).pressKey(['Tab', 'Tab']);
  //   }
  // },




  FEIN(FEIN) {
    I.retry(2).fillField(this.locators.holderFEIN, FEIN);
  },

  Address(Address) {
    I.retry(2).fillField(this.locators.holderAddress, Address);
  },

  City(City) {
    I.retry(2).fillField(this.locators.holderCity, City);
  },

  State(State) {
    I.retry(2).click(this.locators.holderState);
    I.retry(2).fillField(this.locators.holderState, State);
    I.retry(2).pressKey(['Tab', 'Tab']);
  },

  Zip(Zip) {
    I.retry(2).fillField(this.locators.holderZip, Zip);
  },

  INCState(IncState) {
    I.retry(2).click(this.locators.holderINCState);
    I.retry(2).fillField(this.locators.holderINCState, IncState);
    I.retry(2).pressKey(['Tab', 'Tab']);
  },

  SaveHolder() {
    I.retry(2).click(this.locators.holderSave);
    I.waitForText('Holder saved successfully', 60);
  },

  AddContact() {
    I.retry(2).click(this.locators.holderContactAdd);
    I.waitForText('Correct the highlighted fields', 5);
  },

  // ContactType(ContactType) {
  //   I.retry(2).fillField("//label[contains(text(),'" + ContactType + "')]");
  //   },

  ContactEmail(ContactEmail) {
    I.retry(2).click(this.locators.holderContactEmail);
    I.retry(2).fillField(this.locators.holderContactEmail, ContactEmail);
  },

  ContactName(ContactName) {
    I.retry(2).fillField(this.locators.holderContactName, ContactName);
  },

  ContactState(ContactState) {
    I.retry(2).click(this.locators.holderContactState);
    I.retry(2).fillField(this.locators.holderContactState, ContactState);
    I.retry(2).pressKey(['Tab', 'Tab']);
  },

  ContactSave() {
    I.retry(2).scrollTo(this.locators.holderContactSave);
    I.retry(2).click(this.locators.holderContactSave);
  },

  StateSpecificOpen() {
    I.retry(2).click(this.locators.holderStateSpecific);
    I.waitForText('State Specific Information', 30);
  },

  SpecificStateSelect(stateSpecific) {
    I.retry(2).waitForElement("//tr//td[contains(text(),'" + stateSpecific + "')]//following-sibling::td[*]//input[@type='checkbox']",10)
    I.retry(2).click("//tr//td[contains(text(),'" + stateSpecific + "')]//following-sibling::td[*]//input[@type='checkbox']");
  },

  StateSpecificSave() {
    I.retry(2).click(this.locators.holderStateSpecificSave);
    I.waitForText('State specific information updated successfully', 30);
  },

  StateSpecificClose() {
    I.retry(2).click(this.locators.holderStateSpecificClose);
    I.waitForNavigation();
    I.waitForText('Holder Detail', 30);
  },

  AdditionalHolderInfo() {
    I.retry(2).click(this.locators.holderAdditionalInfo);
    I.waitForText('Additional Holder Information', 20);
  },

  UDFAdd() {
    I.retry(2).waitForElement(this.locators.holderAddUDF);
    I.retry(2).click(this.locators.holderAddUDF);
    I.retry(2).waitForText('User Defined Field',10);
  },

  UDFAddName(UDFName) {
    I.retry(2).waitForElement(this.locators.holderUDFName,10);
    I.retry(5).click(this.locators.holderUDFName);
    I.retry(2).fillField(this.locators.holderUDFName, UDFName);
  },

  UDFSave() {
    I.retry(2).click(this.locators.holderUDFSave);
    I.waitForText('Additional Holder Information', 20);
    I.wait(2);
  },

  StatIndAdd() {
    I.retry(2).scrollTo(this.locators.holderAddStatInd);
    I.retry(2).click(this.locators.holderAddStatInd);
    I.retry(2).waitForText('Status Indicator',5);
  },

  StatIndName(StatIndName) {
    I.retry(2).waitForElement(this.locators.holderStatIndName,10);
    I.retry(2).click(this.locators.holderStatIndName);
    I.retry(2).fillField(this.locators.holderStatIndName, StatIndName);
  },

  StatIndDesc(StatIndDesc) {
    I.retry(2).click(this.locators.holderStatIndDesc);
    I.retry(2).fillField(this.locators.holderStatIndDesc, StatIndDesc);
  },

  StatIndSave() {
    I.retry(2).click(this.locators.holderStatIndSave);
  },

  AdditionalHolderInfoSave() {
    I.wait(2);
    I.retry(2).click(this.locators.holderAdditionalInfoSave);
    I.waitForText('User Defined Fields and Status Indicators saved successfully', 30);
  },

  AdditionalHolderInfoClose() {
    I.retry(2).click(this.locators.holderAdditionalInfoClose);
    I.waitForNavigation();
    I.waitForText('Holder Detail', 20);
  },

}


