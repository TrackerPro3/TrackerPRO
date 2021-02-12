Feature('CP');

let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let Holder = require('C:/Users/RC08508/CodeceptJS/pages/holder_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');
let pup = require('../utilities/pup.js');


Scenario('Test CP', ({ I }) => {

   I.amOnPage('https://controlpointcore.unitydev.co/');
   I.fillField('//body/app[1]/div[1]/div[2]/app-login[1]/div[1]/login-form[1]/div[2]/form[1]/fieldset[1]/div[1]/input[1]','admin.user@ryan.com');
   I.fillField('#password','Aa1111111!');
   I.click('Login');
   pause();
   I.click('//body/app[1]/div[1]/div[1]/unity-navigation[1]/div[1]/div[1]/ul[1]/li[4]');
   I.click('Customer Report')
   I.click('.fa.fa-columns')
   I.wait(10)
   I.click('//span[contains(text(),"Customer ID")]');
   I.dragAndDrop('//span[contains(text(),"Customer ID")]','//body/app[1]/div[1]/div[2]/app-reporting[1]/div[1]/cp-customer-reporting[1]/unity-reporting-grid[1]/unity-grid[1]')



});



