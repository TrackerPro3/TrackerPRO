// const { setWindowSize } = require('@codeceptjs/configure');
// const { output } = require('codeceptjs');
// setWindowSize(1280, 960);

// let I_login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let browserselect = require('C:/Users/RC08508/CodeceptJS/utilities/browser.js');

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: data.login.Build,
      show: true,
      // restart: true,
      keepCookies: true,
      waitForNavigation: "domcontentloaded",
      // waitForAction: 1000,
      // windowSize: '1280x960',
      chrome: {
        args: ['--ignore-certificate-errors', '--window-size=1280,960'],
        defaultViewport: null,
        executablePath: browserselect.browserSelect(data.login.Browser),
      },
    },
    "FileSystem": {

    },
    Mochawesome: {
      uniqueScreenshotNames: true
    },


  },
  include: {
    I: './steps_file.js'
  },
  "mocha": {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": false,
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
    // pauseOnFail: {
    // },
    // retryFailedStep: {
    //   enabled: false,
    //   retries: 2
    // },
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
    autoLogin: {
      enabled: false,
      saveToFile: true, // set this to false if you don't need to pass cookies to other sessions
      inject: 'loginAs', // use `loginAs` instead of login
      users: {
        Surya: {
          login: async (I) => {
            I.amOnPage(data.login.Build);
            I.fillField('ctl00$cphBody$txtUsername','suryateja.davuluri@ryan.com');
            I.click('Next');
            I.fillField('#ctl00_cphBody_txtPassword','Password');
            I.click('Next');
            I.click("//div[contains(text(),'" + data.login.Org + "')]");
            I.click('.tpro-btn-icon-label');

          },
          check: (I) => {
            I.seeInCurrentUrl('/Home.aspx');
          },
          fetch: () => { 
            return I.executeScript(() => localStorage.getItem('session_id'));
          }, // empty function
          restore: () => { 
            I.amOnPage(data.login.Build);
        I.executeScript((session) => localStorage.setItem('session_id', session), session);
          }, // empty funciton
        },
      }
    }
  },
  tests: './specs/*_test.js',
  name: 'CodeceptJS',

  // rerun: {
  //   // run 4 times until 1st success
  //   minSuccess: 1,
  //   maxReruns: 4,
  // }
}
