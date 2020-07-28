
Feature('TrackerPRO');

    let I_login = require('C:/Users/RC08508/CodeceptJS/pages/Loginlocators.js');
    let defaultPassword = 'password';

    Scenario('Test Login', async (I) => {

      //Login
        
        // I.amOnPage('about:blank');   // input custom url
        I_login.SelectBuild('India');      // input Build Name
        I.see('Ryan');
        I_login.Username('suryateja.davuluri@ryan.com');    // input Username
        I.click('Next');
        I.see('Forgot your password?');
        I_login.Password(defaultPassword);
        I.click('Next');

        let alert = await I.grabTextFrom(I_login.locators.alertContent);
        I_login.ActualPassword(alert,'Password');   // input Password

        let title = await I.grabTitle();
        I_login.MustChange(title,'Password','Password');    

        let page = await I.grabTitle();
        I_login.OrgPage(page,'QA - Surya');     // input Org Name

        I.waitForText('Home','20');
        I.see('Home');
    


    });
