
module.exports = {

    login : {

        defaultPassword :   'password',  // Default Value
        newPassword     :   'Password',  // Default Value

        Build           :   'Echo',
        Username        :   'suryateja.davuluri@ryan.com',
        Password        :   'Password', 
        Org             :   'QA - Surya' 
 
    },

    holder : {

        HolderName      :   'Test Holder Name 1',
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
        DatePaid        :   '08202020',     // N or Date
        ReportType      :   'Final',     // Prelim or Final
        StateList       :   ['AK','KS','MD','MT','ND','UT','VT']   //['AK','KS','MD','MT','ND','UT','VT']
    },


    submitreport : {

        ReportCategory  :   'S',     // S or C
        HolderList      :   ['WOF'], // ['Card','DDL','WOF','PJ Corporation']
        ReportGroup     :   'Separate',     //Separate, By Holder/State, By Holder, By State, All
        ReportDetail    :   'Finalize',     // Preview or Finalize
        DatePaid        :   '08202020',     // N or Date
        ReportType      :   'Final',     // Prelim or Final
        StateList       :   ['AK','KS','MD','MT','ND','UT','VT']

    }

}





