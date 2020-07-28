 const {
  setWindowSize

 } = require('@codeceptjs/configure');

 setWindowSize(1280,960);

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      waitForNavigation: "networkidle0",
      // waitForAction: 1000,
      // windowSize: '1280x960',
      // chrome: {
      //   args: ['--ignore-certificate-errors','--no-sandbox', '--window-size=1280,960'],
      //   defaultViewport: null
      // },

      "Mochawesome": {
        "uniqueScreenshotNames": "true"
      },


    }
      
    
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    "reporterOptions": {
      "reportDir": "output/mochawesome",
      "reportFilename": "TrackerPRO",
      "charts":true,
      "overwrite":false,
      "timestamp":true
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
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './specs/*_test.js',
  name: 'CodeceptJS'
}