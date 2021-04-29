Feature('Excel');


Scenario('Test Excel', ({ I }) => {

    I.amOnPage('https://demoqa.com/automation-practice-form');
    //   pause();

    let xl = require('C:/Users/RC08508/CodeceptJS/utilities/excelReader.js');

    var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Test');
    td.forEach(function (value) {

        var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Test1');
        td.forEach(function (value) {


            let holders = value.FieldB;
            let x;
            for (x of [holders]) {
                I.checkOption(x);
                // I.wait(5);
            }

        })

        var td = xl.read_from_excel('C:/Users/RC08508/CodeceptJS/testdata/TrackerDataChrome.xlsx', 'Test2');
        td.forEach(function (value) {


            let holders = value.FieldB;
            let x;
            for (x of [holders]) {
                I.checkOption(x);
                // I.wait(5);
            }

        })
    })


});



