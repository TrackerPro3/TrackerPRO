let XLXS = require('xlsx');

class xlReader {

    read_from_excel(filePath, sheetName) {

        // var workbook = XLXS.readFile(filePath,{sheetStubs: true});
        var workbook = XLXS.readFile(filePath);
        var worksheet = workbook.Sheets[sheetName];
        var a = XLXS.utils.sheet_to_json(worksheet);
        console.log(a);
        return a;
      

    }

}

module.exports = new xlReader();