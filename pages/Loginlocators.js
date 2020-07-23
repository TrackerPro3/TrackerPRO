const { I } = inject();

module.exports = {

  // insert your locators and methods here

_init() {

  I = require('../steps_file.js')();
},

  locators: {
    username: "ctl00$cphBody$txtUsername",
    password: "#ctl00_cphBody_txtPassword",
    // selectOrg: "//div[contains(text(),'QA - Surya')]",
    // selectOrg: "//div[contains(text(),'" + orgName + "')]",
    selectButton : ".tpro-btn-icon-label"

  },


 Username(Username) {
   I.fillField(this.locators.username, Username)
 },

 Password(Password) {
  I.fillField(this.locators.password, Password);
 },
       
 Org(orgName) {
   I.click("//div[contains(text(),'" + orgName + "')]");
   I.click(this.locators.selectButton);
 },


 SelectBuild(BuildName) {
    let build = BuildName
    switch(build) {

      case 'Charlie': I.amOnPage('https://dwsapp16a.ryanco.com/Charlie/');
      break;

      case 'Hotel': I.amOnPage('https://cdrdevapp16.ryanco.com/Hotel');
      break;

    }

 }
 
    
  

}
