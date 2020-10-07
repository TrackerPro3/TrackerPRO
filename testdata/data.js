module.exports = {

    login : {

        defaultPassword :   'password',  // Default Value
        newPassword     :   'Password',  // Default Value

        Build           :   'https://cdrdevapp16.ryanco.com/Pinned2',
        Username        :   'suryateja.davuluri@ryan.com',      //suryateja.davuluri@ryan.com
        Password        :   'Password', 
        Org             :   'QA - Surya',
        Browser         :   'Chrome'    // Chrome or Edge or Leave it Blank for Chromium
 
    },

    import : {

        MappingType     :   'XML',      // TEXT or XML
        HolderName      :   'Test Holder Name 1',
        FileName        :   'uploads/DDL.XML'   // Do not remove uploads/
    },

    filemapping : {

        MappingName     :   'Test File Mapping Delimited',
        MappingDesc     :   'Test File Mapping Description Delimited',
        MappingType     :   'Delimited',     // Excel or Delimited or Fixed
        Delimiter       :   '|',
        MappingSheet    :   'FileMappingDelimited'     // FileMappingDelimted or FileMappingExcel
    },

    holder : {

        HolderName      :   'Test Holder Name 2',
        EntityName      :   'Test Entity Name',
        Classification  :   'B',
        FEIN            :   '987654321',
        Address         :   'Test Address',
        City            :   'Test City',
        State           :   'FL',
        Zip             :   '123456789',
        INCState        :   'FL',

        ContactType     :   'Report',
        ContactName     :   'Test Contact Name',
        ContactEmail    :   'testemail@test.com',
        ContactState    :   'FL',

        StateSpecific   :   'KS',

        UDFName         :   'U',
        StatIndName     :   '%',
        StatIndDesc     :   'SI1'
        

    },

    

    
    
    letter : {

        HolderName      :   'DDL'

    },



    report : {

        ReportCategory  :   'S',     // S or C
        HolderList      :   ['DDL'], // ['Card','DDL','WOF','PJ Corporation']
        ReportGroup     :   'Separate',     //Separate, By Holder/State, By Holder, By State, All
        ReportDetail    :   'Finalize',     // Preview or Finalize
        DatePaid        :   '09092020',     // N or Date
        ReportType      :   'Final',     // Prelim or Final
        StateList       :   'RI',   //['AK','KS','MD','MT','ND','UT','VT']
        StateList1      :   ['NY'],   //['AK','KS','MD','MT','ND','UT','VT']
        StateList2      :   ['GA','GU']   //['AK','KS','MD','MT','ND','UT','VT']


    },


    submitreport : {

        ReportCategory  :   'S',     // S or C
        HolderList      :   ['DDL'], // ['Card','DDL','WOF','PJ Corporation']
        ReportGroup     :   'Separate',     //Separate, By Holder/State, By Holder, By State, All
        ReportDetail    :   'Finalize',     // Preview or Finalize
        DatePaid        :   '',     // N or Date
        ReportType      :   'Final',     // Prelim or Final
        StateList       :   ['KS','MD','MT','ND','UT','VT']

    }

}





