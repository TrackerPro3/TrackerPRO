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
    I.click(this.locators.holderOverview)
  },

  NewHolder() {
    I.click(this.locators.holderNew);
  },

  HolderName(HolderName) {
    I.fillField(this.locators.holderName, HolderName);
  },

  EntityName(EntityName) {
    I.fillField(this.locators.holderEntity, EntityName);
  },

  Classification(Classification) {
    I.click(this.locators.holderClassification);
    I.fillField(this.locators.holderClassification, Classification)
    I.pressKey(['Tab', 'Tab']);
  },



  // Classification(Classification) {

  //   var classifications = [Classification];
  //   var x;
  //   for (x of classifications) {
  //     I.click(this.locators.holderClassification);
  //     I.fillField(this.locators.holderClassification, x)
  //     I.pressKey(['Tab', 'Tab']);
  //   }
  // },





  FEIN(FEIN) {
    I.fillField(this.locators.holderFEIN, FEIN);
  },

  Address(Address) {
    I.fillField(this.locators.holderAddress, Address);
  },

  City(City) {
    I.fillField(this.locators.holderCity, City);
  },

  State(State) {
    I.click(this.locators.holderState);
    I.fillField(this.locators.holderState, State);
    I.pressKey(['Tab', 'Tab']);
  },

  Zip(Zip) {
    I.fillField(this.locators.holderZip, Zip);
  },

  INCState(IncState) {
    I.click(this.locators.holderINCState);
    I.fillField(this.locators.holderINCState, IncState);
    I.pressKey(['Tab', 'Tab']);
  },

  SaveHolder() {
    I.click(this.locators.holderSave);
  },

  AddContact() {
    I.click(this.locators.holderContactAdd);
  },

  // ContactType(ContactType) {
  //   I.fillField("//label[contains(text(),'" + ContactType + "')]");
  //   },

  ContactEmail(ContactEmail) {
    I.click(this.locators.holderContactEmail);
    I.fillField(this.locators.holderContactEmail, ContactEmail);
  },

  ContactName(ContactName) {
    I.fillField(this.locators.holderContactName, ContactName);
  },

  ContactState(ContactState) {
    I.click(this.locators.holderContactState);
    I.fillField(this.locators.holderContactState, ContactState);
    I.pressKey(['Tab', 'Tab']);
  },

  ContactSave() {
    I.scrollTo(this.locators.holderContactSave);
    I.click(this.locators.holderContactSave);
  },

  StateSpecificOpen() {
    I.click(this.locators.holderStateSpecific);
  },


  SpecificStateSelect(stateSpecific) {
    I.click("//tr//td[contains(text(),'" + stateSpecific + "')]//following-sibling::td[*]//input[@type='checkbox']");
  },

  StateSpecificSave() {
    I.click(this.locators.holderStateSpecificSave);
  },

  StateSpecificClose() {
    I.click(this.locators.holderStateSpecificClose);
  },


  AdditionalHolderInfo() {
    I.click(this.locators.holderAdditionalInfo);
  },

  UDFAdd() {
    I.click(this.locators.holderAddUDF);
  },

  UDFAddName(UDFName) {
    I.click(this.locators.holderUDFName);
    I.fillField(this.locators.holderUDFName, UDFName);
  },

  UDFSave() {
    I.click(this.locators.holderUDFSave);
  },

  StatIndAdd() {
    I.scrollTo(this.locators.holderAddStatInd);
    I.click(this.locators.holderAddStatInd);
  },

  StatIndName(StatIndName) {
    I.click(this.locators.holderStatIndName);
    I.fillField(this.locators.holderStatIndName, StatIndName);
  },

  StatIndDesc(StatIndDesc) {
    I.click(this.locators.holderStatIndDesc);
    I.fillField(this.locators.holderStatIndDesc, StatIndDesc);
  },

  StatIndSave() {
    I.click(this.locators.holderStatIndSave);
  },

  AdditionalHolderInfoSave() {
    I.click(this.locators.holderAdditionalInfoSave);
  },

  AdditionalHolderInfoClose() {
    I.click(this.locators.holderAdditionalInfoClose);
  },

}
