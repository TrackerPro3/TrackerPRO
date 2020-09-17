const { setWindowSize } = require('@codeceptjs/configure');

setWindowSize(1280, 960);

let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let browser = require('C:/Users/RC08508/CodeceptJS/utilities/browser.js');

exports.config = {
  output: './jenkins-output',
  helpers: {
    Puppeteer: {
      url: process.env.profile,
      show: true,
      waitForNavigation: "domcontentloaded",
      // waitForAction: 1000,
      // windowSize: '1280x960',
      chrome: {
        args: ['--ignore-certificate-errors'],
        defaultViewport: null,
      },

      Mochawesome: {
        uniqueScreenshotNames: true
      },
    }

  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
        options: {
          verbose: false,
          steps: true,
        }
      },
      mochawesome: {
        stdout: "./jenkins-output/mochawesome/console.log",
        options: {
          reportDir: "./jenkins-output/mochawesome",
          reportFilename: "TrackerPRO",
          overwrite:true,
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
    // screenshotOnFail: {
    //   enabled: false,
    //   fullPageScreenshots : true
    // },
    retryFailedStep: {
      enabled: true
    },
    // autoDelay: {
    //   enabled: true
    // },
    allure: {
      outputDir: './jenkins-output/allure-results'
    }
  },
  tests: './specs/*_test.js',
  name: 'CodeceptJS'
}