const { setWindowSize } = require('@codeceptjs/configure');
const { output } = require('codeceptjs');
setWindowSize(1280, 960);

let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let browserselect = require('C:/Users/RC08508/CodeceptJS/utilities/browser.js');

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: data.login.Build,
      show: true,
      restart: true,
      waitForNavigation: "domcontentloaded",
      // waitForAction: 1000,
      // windowSize: '1280x960',
      chrome: {
        args: ['--ignore-certificate-errors'],
        defaultViewport: null,
        executablePath: browserselect.browserSelect(data.login.Browser),
      },
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
