// const { I } = inject();

// module.exports = {

//   // insert your locators and methods here

//   _init() {

//     I = require('../steps_file.js')();
//   },

//   locators: {
//     link_holderOverview  : '// *[@  ="quickLinkBar"]/li[1]/a',
//     link_OwnerOverview  ://ul[@='quickLinkBar']//a[contains(text(),'Owner Overview')]
//     link_PropertyOverview  ://ul[@='quickLinkBar']//a[contains(text(),'Property Overview')]
//     link_GenerateStateReport  ://ul[@='quickLinkBar']//a[contains(text(),'Generate State Report')]
//     menu_OrgMenu  ://li[@='tpro-header-org']//a[@class='dropdown-toggle']
//     menu_Preferences  :ctl00_lnkPreferences
//     menu_Data  ://a[@class='dropdown-toggle'][contains(text(),'Data')]
//     menu_ExportData  ://a[contains(text(),'Export Data')]
//     menu_ImportData  ://a[contains(text(),'Import Data')]
//     menu_ImportManagement  ://a[contains(text(),'Import Management')]
//     menu_CreateFileMapping  ://a[contains(text(),'Create File Mapping')]
//     menu_FileMappingOverview  ://a[contains(text(),'File Mapping Overview')]
//     menu_DeleteRecords  ://a[contains(text(),'Delete Records')]
//     menu_ModifiyRecords  ://a[contains(text(),'Modify Records')]
//     menu_RelocateData  ://a[contains(text(),'Relocate Data')]
//     menu_RollbackImport  ://a[contains(text(),'Rollback Import')]
//     menu_RollbackStateReport  ://a[contains(text(),'Rollback State Report')]
//     menu_UpdateCheckNumber  ://a[contains(text(),'Update Check Number')]
//     menu_Management  ://a[@class='dropdown-toggle'][contains(text(),'Management')]
//     menu_CreateHolder  ://a[contains(text(),'Create Holder')]
//     menu_HolderOverview  ://li[@class='nav-subitem']//a[contains(text(),'Holder Overview')]
//     menu_CreateOrganization  ://a[contains(text(),'Create Organization')]
//     menu_OrganizationOverview  ://a[contains(text(),'Organization Overview')]
//     menu_CreateOwner  ://a[contains(text(),'Create Owner')]
//     menu_OwnerOverview  ://li[@class='nav-subitem']//a[contains(text(),'Owner Overview')]
//     menu_CreateProperty  ://a[contains(text(),'Create Property')]
//     holderCount  ://div[@class='ag-body-container']//div
//     dlg_EmptyPropertyOk  :tproDialogOk
//     menu_PropertyOverview  ://li[@class='nav-subitem']//a[contains(text(),'Property Overview')]
//     menu_SystemManagement  ://li[@class='dropdown open']//li[14]//a[1]
//     menu_SystemManagementSummary  ://a[contains(text(),'System Management Summary')]
//     menu_OwnerNotification  ://a[contains(text(),'Owner Notification')]
//     menu_CreateNotificationTemplate  ://a[contains(text(),'Create Notification Template')]
//     menu_GenerateNotificationLetters  ://a[contains(text(),'Generate Notification Letters')]
//     menu_NotificationTemplateOverview  ://a[contains(text(),'Notification Template Overview')]
//     menu_ScanBarcodes  ://a[contains(text(),'Scan Barcodes')]
//     menu_AllocatingPublishingCosts  ://a[contains(text(),'Allocate Publishing Costs')]
//     menu_GeneratePublication  ://a[contains(text(),'Generate Publication')]
//     menu_Reports  ://a[contains(text(),'Reports')]
//     menu_ActivityLog  ://a[contains(text(),'Activity Log')]
//     menu_DataValation  ://a[contains(text(),'Data Valation')]
//     menu_CreateReportTemplate  ://a[contains(text(),'Create Report Template')]
//     menu_GenerateInternalReport  ://a[contains(text(),'Generate Internal Report')]
//     menu_ReportTemplateOverview  ://a[contains(text(),'Report Template Overview')]
//     menu_ReportHistory  ://a[contains(text(),'Report History')]
//     menu_GenerateStateReport  ://li[@class='nav-subitem']//a[contains(text(),'Generate State Report')]
//     menu_StateReportOverview  ://a[contains(text(),'State Report Overview')]
//     menu_SubmitStateReport  ://a[contains(text(),'Submit State Report')]
//     menu_Security  ://a[@class='dropdown-toggle'][contains(text(),'Security')]
//     menu_ChangePassword  ://a[contains(text(),'Change Password')]
//     menu_CreateRole  ://a[contains(text(),'Create Role')]
//     menu_RoleOverview  ://a[contains(text(),'Role Overview')]
//     menu_AccessTokenOverview  ://a[contains(text(),'Access Token Overview')]
//     menu_LicenseKey  ://a[contains(text(),'License Key')]
//     menu_SecurityAdministration  ://a[contains(text(),'Security Administration')]
//     menu_SingleSignOn  ://a[contains(text(),'Single Sign-On')]
//     menu_CreateUser  ://a[contains(text(),'Create User')]
//     menu_UserOverview  ://a[contains(text(),'User Overview')]
//     logo_TrackerHome  :ctl00_logoLink
    

//     },

//   HolderOverview() {
//     I.retry(2).click(this.locators.holderOverview);
//     I.waitForNavigation();
//   },

 


// }

