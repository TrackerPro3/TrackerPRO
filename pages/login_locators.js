const { I } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

    I = require('../steps_file.js')();
  },

  locators: {
    username: "ctl00$cphBody$txtUsername",
    password: "#txtPassword",
    // password: "#ctl00_cphBody_txtPassword",
    selectButton: ".tpro-btn-icon-label",
    alertContent: '.alert-contents',
    newPassword: '#txtNewPassword',
    // newPassword: '#ctl00_cphBody_txtNewPassword',
    confirmPassword: '#txtVerifyPassword'
    // confirmPassword: '#ctl00_cphBody_txtVerifyPassword'

  },

  // This function chooses which build to Login
  SelectBuild(BuildName) {
    let build = BuildName
    switch (build) {

      case 'Bravo': I.amOnPage('https://cdrdevapp16.ryanco.com/Bravo/');
        I.see('Ryan');
        break;
      case 'Charlie': I.amOnPage('https://dwsapp16a.ryanco.com/Charlie/');
        I.see('Ryan');
        break;
      case 'Delta': I.amOnPage('https://cdrdevapp16.ryanco.com/Delta/');
        I.see('Ryan');
        break;
      case 'Echo': I.amOnPage('https://dwsapp16a.ryanco.com/Echo/');
        I.see('Ryan');
        break;
      case 'Foxtrot': I.amOnPage('https://dwsapp16a.ryanco.com/Foxtrot/');
        I.see('Ryan');
        break;
      case 'Golf': I.amOnPage('https://cdrdevapp16.ryanco.com/Golf/');
        I.see('Ryan');
        break;
      case 'Hotel': I.amOnPage('https://cdrdevapp16.ryanco.com/Hotel/');
        I.see('Ryan');
        break;
      case 'India': I.amOnPage('https://dwsapp16a.ryanco.com/India/');
        I.see('Ryan');
        break;
      case 'Juliett': I.amOnPage('https://cdrdevapp16.ryanco.com/Juliett/');
        I.see('Ryan');
        break;
      case 'Kilo': I.amOnPage('https://dwsapp16a.ryanco.com/Kilo/');
        I.see('Ryan');
        break;
      case 'Lima': I.amOnPage('https://dwsapp16a.ryanco.com/Lima/');
        I.see('Ryan');
        break;
      default: I.amOnPage('/');
        // I.see('Ryan');
        I.waitForText('Ryan',90);
    }
  },

  Username(Username) {
    I.fillField(this.locators.username, Username);
    I.click('Next');
    // I.waitForNavigation();
    I.waitForText('Forgot your password?', 30);
    
  },

  Password(Password) {
    I.fillField(this.locators.password, Password);
    I.click('Next');
  },

  // This function checks if default password is already reset are not
  async ActualPassword(alert,Password) {
    if (alert === 'User ID/Password is invalid. Please try again.') {
      I.fillField(this.locators.password, Password);
      I.click('Next');
      // I.waitForNavigation();
    }
  },

  // This function checks for must change password page
  async MustChange(title,newPassword) {
    switch (title) {
      case 'Tracker®PRO - Select Organization':
        {
          I.see('Select Organization');
          break;
        }
      case 'Tracker®PRO - Login':
        {
          I.see('You must change your password to continue');
          I.fillField(this.locators.newPassword, newPassword);
          I.fillField(this.locators.confirmPassword, newPassword);
          I.click('Login');
          // I.waitForNavigation();
          break;
        }
        case 'Tracker®PRO - Home':
        {
          I.waitForText('Home', 30);
          I.see('Home');
          break;
        }
    }
  },



  // This function let us decide the Org Name and Org Page appearing
  async OrgPage(org,orgName) {
    // let title = PageTitle
    switch (org) {

      case 'Tracker®PRO - Select Organization':
        {
          I.see('Select Organization');
          I.click("//div[contains(text(),'" + orgName + "')]");
          I.click(this.locators.selectButton);
          // I.waitForNavigation();
          I.waitForText('Home', 30);
          I.see('Home');
          break;
        }

      case 'Tracker®PRO - Home':
        {
          I.waitForText('Home', 30);
          I.see('Home');
          break;
        }

    }
  },
}