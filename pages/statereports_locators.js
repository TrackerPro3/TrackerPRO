const { I } = inject();

module.exports = {

    // insert your locators and methods here

    _init() {

        I = require('../steps_file.js')();
    },

    locators: {
        reportsMenu: '//a[contains(text(),"Reports")]',
        stateReportGeneratePage: '//a[contains(text(),"Generate State Report")]',
        reportCategorySeparate: '#ctl00_cphBody_btnGroupHolderReportingType_0',
        reportCategoryCombined: '#ctl00_cphBody_btnGroupHolderReportingType_1',
        reportGrouping: '#cboReportGroupBy-combo-text',
        stateReportPreview: '#ctl00_cphBody_btnGroupReportType_0',
        stateReportFinalize: '#ctl00_cphBody_btnGroupReportType_1',
        stateReportDatePaid: '#ctl00_cphBody_txtDatePaid',
        stateReportTable: '//div[contains(text(),"AK - Alaska")]',
        generateStateReport: '//span[@class="tpro-btn-icon-label"][contains(text(),"Generate State Report")]'


    },


    ReportMenu() {
        I.click(this.locators.reportsMenu)
    },

    GenerateStateReportPage() {
        I.click(this.locators.stateReportGeneratePage);
    },

    ReportsCategory(Category) {
        if (Category == 'S') {
            I.click(this.locators.reportCategorySeparate);
        }
        else if (Category == 'C')
            I.click(this.locators.reportCategoryCombined);
    },


    SelectHolder(holdername) {
        I.wait(2);
        I.checkOption("//div[contains(text(),'" + holdername + "')]");
    },

    ReportGroup(ReportGroup) {
        I.click(this.locators.reportGrouping);
        I.fillField(this.locators.reportGrouping, ReportGroup)
        I.pressKey(['Tab', 'Tab']);
    },

    ReportDetails(ReportDetail) {
        if (ReportDetail == 'Preview') {
            I.scrollTo(this.locators.stateReportPreview);
            I.click(this.locators.stateReportPreview);
        }
        else if (ReportDetail == 'Finalize')
            I.scrollTo(this.locators.stateReportFinalize);
        I.click(this.locators.stateReportFinalize);
    },

    DatePaid(DatePaid) {
        if (DatePaid != 'N') {
            I.fillField(this.locators.stateReportDatePaid, DatePaid);
            I.pressKey(['Tab']);
        }
    },

    StateTable() {
        I.scrollTo(this.locators.stateReportTable);
        I.click(this.locators.stateReportTable);
    },

    GenerateStateReport() {
        I.click(this.locators.generateStateReport);
    },

    ReportType(ReportType, StateCode) {
        if (ReportType == 'Prelim') {
            I.moveCursorTo(locate("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[2]/div"));
            I.click(locate("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[2]/div"));

        }
    
        else if (ReportType == 'Final') {
            I.moveCursorTo(locate("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[3]/div"));
            I.click(locate("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[3]/div"));
        }

    },



    async ReportTypeZ(ReportType, StateCode) {
        let i = 0;
        if (ReportType == 'Prelim') {
            while (i < 5) {
                const numOfElements = await I.grabNumberOfVisibleElements("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[2]/div");
                if (numOfElements === 0) {
                    I.pressKey(['PageDown']);
                }
                else {
                    I.waitForVisible("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[2]/div", 30);
                    I.click("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[2]/div");
                }
                i++;
            }
        }
    
        else if (ReportType == 'Final') {
            while (i < 5) {
                const numOfElements = await I.grabNumberOfVisibleElements("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[3]/div");
                if (numOfElements === 0) {
                    I.pressKey(['PageDown']);
                }
                else {
                    I.waitForVisible("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[3]/div", 30);
                    I.click("//div[contains(text(),'" + StateCode + "')]/following-sibling::div[3]/div");
                }
                i++;
            }
        }

    }

}