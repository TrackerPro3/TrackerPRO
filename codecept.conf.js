const { login } = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
// const { setWindowSize } = require('@codeceptjs/configure');
// const { output } = require('codeceptjs');
// setWindowSize(1280, 960);
// let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let browserselect = require('C:/Users/RC08508/CodeceptJS/utilities/browser.js');

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: '',
      show: true,
      // restart: true,
      keepCookies: true,
      waitForNavigation: "domcontentloaded",
      getPageTimeout: 0,
      // waitForTimeout : 150000,
      // waitForAction: 1000,
      // windowSize: '1280x960',
      chrome: {
        args: ['--ignore-certificate-errors', '--window-size=1280,960'],
        // defaultViewport: null,
        // executablePath: browserselect.browserSelect(data.login.Browser),
        // timeout:0
      },
    },
    "FileSystem": {

    },
    Mochawesome: {
      uniqueScreenshotNames: true
    },


  },
  include: {
    I: './steps_file.js',
    // Login: 'C:/Users/RC08508/CodeceptJS/pages/login_locators.js'
  },
  "mocha": {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": true,
          "steps": true,
        }
      },
      "mochawesome": {
        "stdout": "./output/mochawesome/console.log",
        "options": {
          "reportDir": "output/mochawesome",
          "reportFilename": "TrackerPRO",
          "charts": true,
          // "overwrite":true,
          "timestamp": true,
          // "quiet":true
          "code": true
        }
      },
      // "mocha-junit-reporter": {
      //   "stdout": "./output/console.log",
      //   "options": {
      //     "mochaFile": "./output/result.xml"
      //   },
      //   "attachments": true //add screenshot for a failed test
      // }
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {
    },
    retryFailedStep: {
      enabled: true,
      retries: 2
    },
    autoDelay: {
      enabled: true
    },
    // commentStep: {
    //   enabled: false,
    //   registerGlobal: 'comment'
    // },
    allure: {
      outputDir: './output/allure'
    },
    // autoLogin: {
    //   enabled: false,
    //   saveToFile: false, // set this to false if you don't need to pass cookies to other sessions
    //   inject: 'loginAs', // use `loginAs` instead of login
    //   users: {
    //     Surya: {
    //       login: async (Login) => {
    //         Login.amOnPage(data.login.Build);
    //         // I.fillField('ctl00$cphBody$txtUsername', 'suryateja.davuluri@ryan.com');
    //         // I.click('Next');
    //         // I.fillField('#ctl00_cphBody_txtPassword', 'Password');
    //         // I.click('Next');
    //         // I.click("//div[contains(text(),'" + data.login.Org + "')]");
    //         // I.click('.tpro-btn-icon-label');
    //         // Login.SelectBuild(data.login.Build);   // input Build Name
    //         Login.Username(data.login.Username);    // input Username
    //         Login.Password(data.login.defaultPassword); // input default Password
    //         Login.ActualPassword(await Login.grabTextFrom(Login.locators.alertContent), data.login.Password);   // input Password
    //         Login.MustChange(data.login.newPassword);   // input New Password
    //         Login.OrgPage(data.login.Org);
            

    //       },
    //       check: (Login) => {
    //         Login.seeInCurrentUrl('/Home.aspx');
    //       },
    //       fetch: () => {}, // empty function
    //       restore: () => {}, // empty funciton
    //     },
    //   }
      
    // }
  },
  tests: './specs/*_test.js',
  name: 'CodeceptJS',

  // rerun: {
  //   // run 4 times until 1st success
  //   minSuccess: 1,
  //   maxReruns: 4,
  // }
}
