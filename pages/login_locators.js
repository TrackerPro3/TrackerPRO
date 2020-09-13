const { I } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

  I = require('../steps_file.js')();
  },

  locators: {
    username: "ctl00$cphBody$txtUsername",
    password: "#ctl00_cphBody_txtPassword",
    selectButton : ".tpro-btn-icon-label",
    alertContent : '.alert-contents',
    newPassword : '#ctl00_cphBody_txtNewPassword',
    confirmPassword : '#ctl00_cphBody_txtVerifyPassword'

  },


 Username(Username) {
   I.fillField(this.locators.username, Username)
 },

 Password(Password) {
  I.fillField(this.locators.password, Password);
 },
       
// This function chooses which build to Login
 SelectBuild(BuildName) {
    let build = BuildName
    switch(build) {

      case 'Bravo'  : I.amOnPage('https://cdrdevapp16.ryanco.com/Bravo/');
      break;
      case 'Charlie': I.amOnPage('https://dwsapp16a.ryanco.com/Charlie/');
      break;
      case 'Delta'  : I.amOnPage('https://cdrdevapp16.ryanco.com/Delta/');
      break;
      case 'Echo'   : I.amOnPage('https://dwsapp16a.ryanco.com/Echo/');
      break;
      case 'Foxtrot': I.amOnPage('https://dwsapp16a.ryanco.com/Foxtrot/');
      break;
      case 'Golf'   : I.amOnPage('https://cdrdevapp16.ryanco.com/Golf/');
      break;
      case 'Hotel'  : I.amOnPage('https://cdrdevapp16.ryanco.com/Hotel/');
      break;
      case 'India'  : I.amOnPage('https://dwsapp16a.ryanco.com/India/');
      break;
      case 'Juliett': I.amOnPage('https://cdrdevapp16.ryanco.com/Juliett/');
      break;
      case 'Kilo'   : I.amOnPage('https://dwsapp16a.ryanco.com/Kilo/');
      break;
      case 'Lima'   : I.amOnPage('https://dwsapp16a.ryanco.com/Lima/');
      break;
      default       : I.amOnPage('/');

    }
 },


// This function checks if default password is already reset are not
   ActualPassword(alert,Password) {
    let message = alert
    switch(message) {
      case 'User ID/Password is invalid. Please try again.' :
        I.fillField(this.locators.password, Password);
        I.click('Next');
        I.waitForNavigation();
        break;
    }
},

// This function checks for must change password page
 MustChange(PageTitle,newPassword,confirmPassword) {
    let title = PageTitle
    switch(title) {
      case 'Tracker®PRO - Select Organization' : 
        {
          I.see('Select Organization');
          break;
        }
      case 'Tracker®PRO - Login' :
        {
          I.see('You must change your password to continue');
          I.fillField(this.locators.newPassword,newPassword);
          I.fillField(this.locators.confirmPassword,confirmPassword);
          I.click('Login');
          I.waitForNavigation();
          break;
        }
    }
 },



// This function let us decide the Org Name and Org Page appearing
  OrgPage(PageTitle,orgName) {
    let title = PageTitle
    switch(title) {

      case 'Tracker®PRO - Select Organization' : 
      {
        I.see('Select Organization');
        I.click("//div[contains(text(),'" + orgName + "')]");
        I.click(this.locators.selectButton);
        I.waitForNavigation();
        break;
      }

      case 'Tracker®PRO - Home' :
        {
          break;
        }
      
    }
 },    
}
