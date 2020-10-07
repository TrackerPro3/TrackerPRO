const { Login } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

    Login = require('../steps_file.js')();
  },

  locators: {
    username: "ctl00$cphBody$txtUsername",
    password: "#ctl00_cphBody_txtPassword",
    selectButton: ".tpro-btn-icon-label",
    alertContent: '.alert-contents',
    newPassword: '#ctl00_cphBody_txtNewPassword',
    confirmPassword: '#ctl00_cphBody_txtVerifyPassword'

  },

  // This function chooses which build to Login
  SelectBuild(BuildName) {
    let build = BuildName
    switch (build) {

      case 'Bravo': Login.amOnPage('https://cdrdevapp16.ryanco.com/Bravo/');
        Login.see('Ryan');
        break;
      case 'Charlie': Login.amOnPage('https://dwsapp16a.ryanco.com/Charlie/');
        Login.see('Ryan');
        break;
      case 'Delta': Login.amOnPage('https://cdrdevapp16.ryanco.com/Delta/');
        Login.see('Ryan');
        break;
      case 'Echo': Login.amOnPage('https://dwsapp16a.ryanco.com/Echo/');
        Login.see('Ryan');
        break;
      case 'Foxtrot': Login.amOnPage('https://dwsapp16a.ryanco.com/Foxtrot/');
        Login.see('Ryan');
        break;
      case 'Golf': Login.amOnPage('https://cdrdevapp16.ryanco.com/Golf/');
        Login.see('Ryan');
        break;
      case 'Hotel': Login.amOnPage('https://cdrdevapp16.ryanco.com/Hotel/');
        Login.see('Ryan');
        break;
      case 'Loginndia': Login.amOnPage('https://dwsapp16a.ryanco.com/Loginndia/');
        Login.see('Ryan');
        break;
      case 'Juliett': Login.amOnPage('https://cdrdevapp16.ryanco.com/Juliett/');
        Login.see('Ryan');
        break;
      case 'Kilo': Login.amOnPage('https://dwsapp16a.ryanco.com/Kilo/');
        Login.see('Ryan');
        break;
      case 'Lima': Login.amOnPage('https://dwsapp16a.ryanco.com/Lima/');
        Login.see('Ryan');
        break;
      default: Login.amOnPage('/');
        Login.see('Ryan');
    }
  },

  Username(Username) {
    Login.fillField(this.locators.username, Username);
    Login.click('Next');
    Login.waitForNavigation();
    Login.waitForText('Forgot your password?', 30);
  },

  Password(Password) {
    Login.fillField(this.locators.password, Password);
    Login.click('Next');
  },

  // This function checks if default password is already reset are not
  async ActualPassword(alert,Password) {
    if (alert === 'User ID/Password is invalid. Please try again.') {
      Login.fillField(this.locators.password, Password);
      Login.click('Next');
      Login.waitForNavigation();
    }
  },

  // This function checks for must change password page
  async MustChange(newPassword) {
    switch (await Login.grabTitle()) {
      case 'Tracker®PRO - Select Organization':
        {
          Login.see('Select Organization');
          break;
        }
      case 'Tracker®PRO - Login':
        {
          Login.see('You must change your password to continue');
          Login.fillField(this.locators.newPassword, newPassword);
          Login.fillField(this.locators.confirmPassword, newPassword);
          Login.click('Login');
          Login.waitForNavigation();
          break;
        }
        case 'Tracker®PRO - Home':
        {
          Login.waitForText('Home', 30);
          Login.see('Home');
          break;
        }
    }
  },



  // This function let us decide the Org Name and Org Page appearing
  async OrgPage(orgName) {
    // let title = PageTitle
    switch (await Login.grabTitle()) {

      case 'Tracker®PRO - Select Organization':
        {
          Login.see('Select Organization');
          Login.click("//div[contains(text(),'" + orgName + "')]");
          Login.click(this.locators.selectButton);
          Login.waitForNavigation();
          Login.waitForText('Home', 30);
          Login.see('Home');
          break;
        }

      case 'Tracker®PRO - Home':
        {
          Login.waitForText('Home', 30);
          Login.see('Home');
          break;
        }

    }
  },
}