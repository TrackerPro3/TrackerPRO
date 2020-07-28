const { I } = inject();

module.exports = {

  // insert your locators and methods here

_init() {

  I = require('../steps_file.js')();
},

  locators: {
    holderOverview : "//ul[@id='quickLinkBar']//a[contains(text(),'Holder Overview')]",
    holderNew : "//span[contains(text(),'New')]",
    holderName : '#ctl00_cphBody_txtHolderCurrentName',
    holderEntity : '#ctl00_cphBody_txtLegalEntityName',
    holderClassification : '#cboHolderCurrentClassification-combo-text',
    holderFEIN : '#ctl00_cphBody_txtHolderCurrentFedId',
    holderAddress : '#ctl00_cphBody_txtHolderCurrentAddress1',
    holderCity : '#ctl00_cphBody_txtHolderCurrentCity',
    holderState : '#cboHolderCurrentState-combo-text',
    holderZip : '#ctl00_cphBody_txtHolderCurrentZip',
    holderINCState : '#cboHolderIncorporationState-combo-text',
    // holderSave : "//span[contains(text(),'Save')]",
    holderSave : "//span[@class='tpro-btn-icon-label' and text()='Save']",
    holderContactAdd : '#ctl00_cphBody_holderContactJsonGrid_add',
    // holderContactType : "//label[contains(text(),'" + contactTypeSelect + "')]",
    holderContactEmail : '#ctl00_cphBody_txtContactEmail',
    holderContactName : '#ctl00_cphBody_txtContactFullName',
    holderContactState : '#cboContactState-combo-text',
    holderContactSave : "//button[@class='btn btn-primary tpro_standard_button'][contains(text(),'OK')]"

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
    I.fillField(this.locators.holderClassification,Classification)
    I.pressKey(['Tab','Tab']);
    },
 
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
    I.fillField(this.locators.holderState,State);
    I.pressKey(['Tab','Tab']);
    },

    Zip(Zip) {
    I.fillField(this.locators.holderZip, Zip);
    },

    INCState(IncState) {
    I.click(this.locators.holderINCState);
    I.fillField(this.locators.holderINCState,IncState);
    I.pressKey(['Tab','Tab']);
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
      I.fillField(this.locators.holderContactState,ContactState);
      I.pressKey(['Tab','Tab']);
    },

    ContactSave() {
      I.scrollTo(this.locators.holderContactSave);
      I.click(this.locators.holderContactSave);
    }

    




}
