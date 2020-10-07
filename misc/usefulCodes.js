//         // executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
//         // executablePath: 'C:/Program Files/internet explorer/iexplore.exe'
//         // executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'

//         // executablePath: browser.browserSelect(data.login.Browser)


// // // use for of loops

// // var states = ['CA', 'MA'];
// //   var x;
// //   for (x of states) {
// //     I.scrollTo("//div[contains(text(),'" + x + "')]");
// //     I.click("//div[contains(text(),'" + x + "')]");
// //   }


//   // npx codeceptjs run --profile https://azrtracker01.trackerpro.cc/Juliett -c jenkins.conf.js ./specs/login_test.js --steps --verbose --reporter mochawesome




//   // Scenario('Test Add Owner', (I) => {


// //     I.click('//ul[@id="quickLinkBar"]//a[contains(text(),"Owner Overview")]');
// //     I.waitForText('Owner Overview', 30);
// //     I.click('#ctl00_cphToolbarItemsRight_toolbarNewButton');
// //     I.waitForText('Owner Detail', 30);
// //     I.fillField('#ctl00_cphBody_uclModifyOwner_txtFirstName', 'Test Owner');
// //     I.click('#ctl00_cphBody_uclModifyOwner_txtOwnerID');
// //     I.fillField('#ctl00_cphBody_uclModifyOwner_txtOwnerID', '100000003');
// //     I.wait(2);
// //     I.click('#ctl00_cphToolbarItemsRight_toolbarSaveButton');
// //     I.wait(20);
// // });


// // let holder_data = new DataTable(['holdername','classification']);
//     // holder_data.add(['Test Holder B','B']);
//     // holder_data.add(['Test Holder F','F']);


// // datatable
//     // let accounts = new DataTable(['HolderNameCreate','Entity','Classification','FEIN','Address','City','State','Zip','IncState','UDF','StatInd','StatIndDesc','ContactEmail','ContactFullName','ContactState']);
//     // accounts.add(['Test Holder B','Test Entity 1','B','111111111','Test Address 1','Test City 1','CA','100000001','CA','Test UDF 1','%','Test Stat Ind 1','test1@test.com','Test Contact Name 1','CA']);
//     // accounts.add(['Test Holder F','Test Entity 2','F','222222222','Test Address 2','Test City 2','CA','100000002','CA','Test UDF 2','*','Test Stat Ind 2','test2@test.com','Test Contact Name 2','CA']);


//     // x.getLocation()
//     //     .then(function(location) {
//     //         return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
            
//     //     })
//     //     I.click(x);


// // use for of loops

// // var states = ['CA', 'MA'];
// //   var x;
// //   for (x of states) {
// //     I.scrollTo("//div[contains(text(),'" + x + "')]");
// //     I.click("//div[contains(text(),'" + x + "')]");
// //   }





//     //  I.wait(20);





//     //  I.wait(20);





//   //   ReportType(ReportType, StateCode) {
//   //     let State = StateCode
//   //     let States1 = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA'];
//   //     let States2 = ['GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA'];
//   //     let States3 = ['MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE'];
//   //     let States4 = ['NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR'];
//   //     let States5 = ['RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];
//   //     if (ReportType == 'Prelim') {
//   //         if (States1.indexOf(State) > -1) {
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
//   //         }
//   //         else if (States2.indexOf(State) > -1) {
//   //             I.pressKey(['PageDown']);
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
//   //         }

//   //         else if (States3.indexOf(State) > -1) {
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
//   //         }

//   //         else if (States4.indexOf(State) > -1) {
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
//   //         }

//   //         else if (States5.indexOf(State) > -1) {
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
//   //         }
//   //     }

//   //     else if (ReportType == 'Final') {
//   //         if (States1.indexOf(State) > -1) {
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
//   //         }
//   //         else if (States2.indexOf(State) > -1) {
//   //             I.pressKey(['PageDown']);
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
//   //         }

//   //         else if (States3.indexOf(State) > -1) {
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
//   //         }

//   //         else if (States4.indexOf(State) > -1) {
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
//   //         }

//   //         else if (States5.indexOf(State) > -1) {
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.pressKey(['PageDown']);
//   //             I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
//   //             I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
//   //         }
//   //     }
//   // },

//   // "reporterOptions": {
//   //   "reportDir": "output/mochawesome",
//   //   "reportFilename": "TrackerPRO",
//   //   "charts": true,
//   //   // "overwrite":true,
//   //   "timestamp": true,
//   //   // "quiet":true
//   //   "code":true
//   // }


//   // Login.SelectBuild(data.login.Build);   // input Build Name
//   // I.waitForText('Ryan', 30);
//   // Login.Username(data.login.Username);    // input Username
//   // I.click('Next');
//   // I.waitForNavigation();
//   // I.waitForText('Forgot your password?', 30);
//   // Login.Password(data.login.defaultPassword);
//   // I.click('Next');
//   // I.waitForNavigation();
//   // let alert = await I.grabTextFrom(Login.locators.alertContent);
//   // Login.ActualPassword(alert, data.login.Password);   // input Password
//   // let title = await I.grabTitle();
//   // Login.MustChange(title, data.login.newPassword, data.login.newPassword);
//   // let page = await I.grabTitle();
//   // Login.OrgPage(page, data.login.Org);     // input Org Name
//   // I.waitForText('Home', 30);
//   // I.see('Home');


