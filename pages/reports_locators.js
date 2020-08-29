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
        I.click("//div[contains(text(),'" + holdername + "')]");
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
        if (DatePaid == 'N') {
        }
        else
            I.fillField(this.locators.stateReportDatePaid, DatePaid);
        I.pressKey(['Tab']);

    },

    StateTable() {
        I.scrollTo(this.locators.stateReportTable);
        I.click(this.locators.stateReportTable);
    },

    GenerateStateReport() {
        I.click(this.locators.generateStateReport);
    },

    ReportType(ReportType, StateCode) {
        let State = StateCode
        let States1 = ['AK' , 'AL' , 'AR' , 'AZ' , 'CA' , 'CO' , 'CT' , 'DC' , 'DE' , 'FL' , 'GA'];
        let States2 = ['GU' , 'HI' , 'IA' , 'ID' , 'IL' , 'IN' , 'KS' , 'KY' , 'LA' , 'MA'];
        let States3 = ['MD' , 'ME' , 'MI' , 'MN' , 'MO' , 'MS' , 'MT' , 'NC' , 'ND' , 'NE'];
        let States4 = ['NH' , 'NJ' , 'NM' , 'NV' , 'NY' , 'OH' , 'OK' , 'OR' , 'PA' , 'PR'];
        let States5 = ['RI' , 'SC' , 'SD' , 'TS' , 'TX' , 'UT' , 'VA' , 'VI' , 'VT' , 'WA' , 'WI' , 'WV' , 'WY'];
        if (ReportType == 'Prelim') {
            if (States1.indexOf(State) > -1) {
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
            }
            else if (States2.indexOf(State) > -1) {
                I.pressKey(['PageDown']);
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
            }

            else if (States3.indexOf(State) > -1) {
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
            }

            else if (States4.indexOf(State) > -1) {
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
            }

            else if (States5.indexOf(State) > -1) {
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[2]/div");
            }
        }

        else if (ReportType == 'Final') {
            if (States1.indexOf(State) > -1) {
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
            }
            else if (States2.indexOf(State) > -1) {
                I.pressKey(['PageDown']);
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
            }

            else if (States3.indexOf(State) > -1) {
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
            }

            else if (States4.indexOf(State) > -1) {
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
            }

            else if (States5.indexOf(State) > -1) {
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.pressKey(['PageDown']);
                I.waitForVisible("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div", 30)
                I.click("//div[contains(text(),'" + State + "')]/following-sibling::div[3]/div");
            }
        }
    }

}