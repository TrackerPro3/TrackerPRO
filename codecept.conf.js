const { setWindowSize } = require('@codeceptjs/configure');
const { output } = require('codeceptjs');
setWindowSize(1280, 960);

let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: data.login.Build,
      // url : process.env.profile || data.login.Build,
      show: true,
      waitForNavigation: "domcontentloaded",
      // waitForAction: 1000,
      // windowSize: '1280x960',
      chrome: {
        args: ['--ignore-certificate-errors', '--no-sandbox', '--window-size=1280,960'],
        defaultViewport: null,
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
  },
  tests: './specs/*_test.js',
  name: 'CodeceptJS',
}