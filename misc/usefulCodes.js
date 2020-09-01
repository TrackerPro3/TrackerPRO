
// use for of loops

var states = ['CA', 'MA'];
  var x;
  for (x of states) {
    I.scrollTo("//div[contains(text(),'" + x + "')]");
    I.click("//div[contains(text(),'" + x + "')]");
  }




  // Scenario('Test Add Owner', (I) => {


//     I.click('//ul[@id="quickLinkBar"]//a[contains(text(),"Owner Overview")]');
//     I.waitForText('Owner Overview', 30);
//     I.click('#ctl00_cphToolbarItemsRight_toolbarNewButton');
//     I.waitForText('Owner Detail', 30);
//     I.fillField('#ctl00_cphBody_uclModifyOwner_txtFirstName', 'Test Owner');
//     I.click('#ctl00_cphBody_uclModifyOwner_txtOwnerID');
//     I.fillField('#ctl00_cphBody_uclModifyOwner_txtOwnerID', '100000003');
//     I.wait(2);
//     I.click('#ctl00_cphToolbarItemsRight_toolbarSaveButton');
//     I.wait(20);
// });


// let holder_data = new DataTable(['holdername','classification']);
    // holder_data.add(['Test Holder B','B']);
    // holder_data.add(['Test Holder F','F']);


// datatable
    let accounts = new DataTable(['HolderNameCreate','Entity','Classification','FEIN','Address','City','State','Zip','IncState','UDF','StatInd','StatIndDesc','ContactEmail','ContactFullName','ContactState']);
    accounts.add(['Test Holder B','Test Entity 1','B','111111111','Test Address 1','Test City 1','CA','100000001','CA','Test UDF 1','%','Test Stat Ind 1','test1@test.com','Test Contact Name 1','CA']);
    accounts.add(['Test Holder F','Test Entity 2','F','222222222','Test Address 2','Test City 2','CA','100000002','CA','Test UDF 2','*','Test Stat Ind 2','test2@test.com','Test Contact Name 2','CA']);


    // x.getLocation()
    //     .then(function(location) {
    //         return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
            
    //     })
    //     I.click(x);

    // function slv (selector) {
      //     window.execute(function (elselector) {
      //         document.querySelector(elselector).scrollIntoView()
      //     }, selector)
          
      // }


      
    // // I.executeScript(function(){
    // //     $('date').datetimepicker('setDate', new Date());
    // // })
    // // let date = await I.executeScript(function(el) {
    // //     // only basic types can be returned
    // //     return $(el).datetimepicker('getDate').toString();
    // //   }, '#date');

    // //   console.log(date);
    // I.click('#ctl00_cphBody_txtDatePaid');
    // I.fillField('#ctl00_cphBody_txtDatePaid','08202020');
    // I.pressKey(['Tab']);

    // // pause();
    // I.scrollTo('#stateGrid-resize');
    // I.moveCursorTo
    // // I.dragAndDrop('#stateGrid-resize','//div[@class="col-md-12 col-lg-6"]//div[5]//div[1]//button[1]');

    // I.dragAndDrop('#stateGrid-resize','//a[contains(text(),"Notices")]');

    // pause();
    // I.click('//div[contains(text(),"PA")]/following-sibling::div[3]/div');
    // I.scrollPageToBottom();



    // I.click('//div[contains(text(),"CA - California")]');
    // // I.click('#ctl00_cphToolbarItemsRight_toolbarGenerateStateReport');
    // // I.click('//div[contains(text(),"CA")]/following-sibling::div[3]/div');
    // // pause();

    // // I.executeScript("window.scrollIntoView();", '//div[contains(text(),"MI - Michigan")]');

    // // I.executeScript(function() {
    // //     // now we are inside browser context
    // //     // $('date').datetimepicker('setDate', new Date());
    // //     scrollTo(0,10000).scrollBy(0,1000)
    // //  });
    // // pause();

    // I.executeScript(function() {
    //     // now we are inside browser context
    //     // $('date').datetimepicker('setDate', new Date());
    //     document.querySelector('#ctl00_cphBody_stateGrid-body').click();
    //     document.querySelector('#ctl00_cphBody_stateGrid-body').scrollIntoView({block : "nearest"});
    //     // document.querySelector('#ctl00_cphBody_stateGrid-body').scrollTop
    //     // document.querySelector('#ctl00_cphBody_stateGrid-body').scrollBy=500;
    //     I.executeScript(function() {
    //         document.querySelector('input[name= "type-36]').click();
    //      });

    //  });


    //  I.wait(20);
