const {
    setWindowSize
  
  } = require('@codeceptjs/configure');
  
  setWindowSize(1280, 960);
  
  let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
  let browser = require('C:/Users/RC08508/CodeceptJS/utilities/browser.js');
  
  exports.config = {
    output: './output',
    helpers: {
      Puppeteer: {
        url : process.env.profile,
        show: true,
        waitForNavigation: "domcontentloaded",
        // waitForAction: 1000,
        // windowSize: '1280x960',
        chrome: {
          args: ['--ignore-certificate-errors', '--no-sandbox', '--window-size=1280,960'],
          defaultViewport: null,
        },
  
        "Mochawesome": {
          "uniqueScreenshotNames": "true"
        },
  
  
      }
  
  
    },
    include: {
      I: './steps_file.js'
    },
    mocha: {
      // "reporterOptions": {
      //   "reportDir": "output/mochawesome",
      //   "reportFilename": "TrackerPRO",
      //   "charts": true,
      //   // "overwrite":true,
      //   "timestamp": true
      // }
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