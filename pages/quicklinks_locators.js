const { I } = inject();

module.exports = {

  // insert your locators and methods here

  _init() {

    I = require('../steps_file.js')();
  },

  locators:  {
    menu_OrgMenu                       : "//span[@id='ctl00_lblInfoOrganization']",
    menu_Preferences                   : "//span[contains(text(),'Preferences')]",
    menu_Data                          : "//a[@class='dropdown-toggle'][contains(text(),'Data')]",
    menu_ExportData                    : "//a[contains(text(),'Export Data')]",
    menu_ImportData                    : "//a[contains(text(),'Import Data')]",
    menu_ImportManagement              : "//a[contains(text(),'Import Management')]",
    menu_CreateFileMapping             : "//a[contains(text(),'Create File Mapping')]",
    menu_FileMappingOverview           : "//a[contains(text(),'File Mapping Overview')]",
    menu_DeleteRecords                 : "//a[contains(text(),'Delete Records')]",
    menu_ModifiyRecords                : "//a[contains(text(),'Modify Records')]",
    menu_RelocateData                  : "//a[contains(text(),'Relocate Data')]",
    menu_RollbackImport                : "//a[contains(text(),'Rollback Import')]",
    menu_RollbackStateReport           : "//a[contains(text(),'Rollback State Report')]",
    menu_UpdateCheckNumber             : "//a[contains(text(),'Update Check Number')]",
    menu_Management                    : "//a[@class='dropdown-toggle'][contains(text(),'Management')]",
    menu_CreateHolder                  : "//a[contains(text(),'Create Holder')]",
    menu_HolderOverview                : "//a[contains(text(),'Holder Overview')]",
    menu_CreateOrganization            : "//a[contains(text(),'Create Organization')]",
    menu_OrganizationOverview          : "//a[contains(text(),'Organization Overview')]",
    menu_CreateOwner                   : "//a[contains(text(),'Create Owner')]",
    menu_OwnerOverview                 : "//a[contains(text(),'Owner Overview')]",
    menu_CreateProperty                : "//a[contains(text(),'Create Property')]",
    holderCount                        : "//div[@class='ag-body-container'],//div",
    dlg_EmptyPropertyOk                : "tproDialogOk",
    menu_PropertyOverview              : "//a[contains(text(),'Property Overview')]",
    menu_SystemManagement              : "//a[contains(text(),'System Management')]",
    menu_SystemManagementSummary       : "//a[contains(text(),'System Management Summary')]",
    menu_OwnerNotification             : "//a[@class='dropdown-toggle'][contains(text(),'Owner Notification')]",
    menu_CreateNotificationTemplate    : "//a[contains(text(),'Create Notification Template')]",
    menu_GenerateNotificationLetters   : "//a[contains(text(),'Generate Notification Letters')]",
    menu_NotificationTemplateOverview  : "//a[contains(text(),'Notification Template Overview')]",
    menu_ScanBarcodes                  : "//a[contains(text(),'Scan Barcodes')]",
    menu_AllocatingPublishingCosts     : "//a[contains(text(),'Allocate Publishing Costs')]",
    menu_GeneratePublication           : "//a[contains(text(),'Generate Publication')]",
    menu_Reports                       : "//a[@class='dropdown-toggle'][contains(text(),'Reports')]",
    menu_ActivityLog                   : "//a[contains(text(),'Activity Log')]",
    menu_DataValation                  : "//a[contains(text(),'Data Validation')]",
    menu_CreateReportTemplate          : "//a[contains(text(),'Create Report Template')]",
    menu_GenerateInternalReport        : "//a[contains(text(),'Generate Internal Report')]",
    menu_ReportTemplateOverview        : "//a[contains(text(),'Report Template Overview')]",
    menu_ReportHistory                 : "//a[contains(text(),'Report History')]",
    menu_GenerateStateReport           : "//a[contains(text(),'Generate State Report')]",
    menu_StateReportOverview           : "//a[contains(text(),'State Report Overview')]",
    menu_SubmitStateReport             : "//a[contains(text(),'Submit State Report')]",
    menu_Security                      : "//a[@class='dropdown-toggle'][contains(text(),'Security')]",
    menu_ChangePassword                : "//a[contains(text(),'Change Password')]",
    menu_CreateRole                    : "//a[contains(text(),'Create Role')]",
    menu_RoleOverview                  : "//a[contains(text(),'Role Overview')]",
    menu_AccessTokenOverview           : "//a[contains(text(),'Access Token Overview')]",
    menu_LicenseKey                    : "//a[contains(text(),'License Key')]",
    menu_SecurityAdministration        : "//a[contains(text(),'Security Administration')]",
    menu_SingleSignOn                  : "//a[contains(text(),'Single Sign-On')]",
    menu_CreateUser                    : "//a[contains(text(),'Create User')]",
    menu_UserOverview                  : "//a[contains(text(),'User Overview')]",
    logo_TrackerHome                   : "#ctl00_logoLink",
    menu_ReportHistoryShortcut         : "//a[@id='ctl00_reportHistoryLink']"
    

    },

  Preferences() {
    I.click(this.locators.menu_OrgMenu);
    I.click(this.locators.menu_Preferences)
    I.waitForText('Preferences',40)
  },

  ExportData() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_ExportData)
    I.waitForText('Export Data',40)
  },

  ImportData() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_ImportData)
    I.waitForText('Import Data',40)
  },
  
  ImportManagment() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_ImportManagement)
    I.waitForText('Import Management',40)
  },
  
  CreateFileMapping() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_CreateFileMapping)
    I.waitForText('File Mapping Detail',40)
  },
  
  FileMappingOverview() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_FileMappingOverview)
    I.waitForText('File Mapping Overview',40)
  },
  
  DeleteRecords() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_DeleteRecords)
    I.waitForText('Group Modify',40)
  },
  
  ModifyRecords() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_ModifiyRecords)
    I.waitForText('Group Modify',40)
    I.waitForText('Group Modify Fields',40)
  },
  
  RelocateData() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_RelocateData)
    I.waitForText('Group Modify',40)
    I.waitForText('Relocate Data',40)
  },
  
  RollbackImport() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_RollbackImport)
    I.waitForText('Rollback Imports',40)
  },
  
  RollbackStateReport() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_RollbackStateReport)
    I.waitForText('Rollback State Report',40)
  },
  
  UpdateCheckNumber() {
    I.click(this.locators.menu_Data);
    I.click(this.locators.menu_UpdateCheckNumber)
    I.waitForText('Update Payment Check Number',40)
  },
  
  CreateHolder() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_CreateHolder)
    I.waitForText('Holder Detail',40)
  },
  
  HolderOverview() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_HolderOverview)
    I.waitForText('Holder Overview',40)
  },
  
  CreateOrganization() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_CreateOrganization)
    I.waitForText('Organization Detail',40)
  },
  
  OrganizationOverview() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_OrganizationOverview)
    I.waitForText('Organization Overview',40)
  },
  
  CreateOwner() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_CreateOwner)
    I.waitForText('Owner Detail',40)
  },
  
  OwnerOverview() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_OwnerOverview)
    I.waitForText('Owner Overview',40)
  },
   
  PropertyOverview() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_PropertyOverview)
    I.waitForText('Property Overview',40)
  },

  async CreateProperty() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_PropertyOverview)
    // var count = I.grabValueFrom('.tpro-count-cell')
    I.wait(5);
    let cnt = await I.grabNumberOfVisibleElements('(//div[@col-id="apv_PropertyNumber"])[3]');
    console.log(cnt);
    if(cnt===0) {
      I.click(this.locators.menu_Management);
      I.click(this.locators.menu_CreateProperty);
      I.waitForText('Select Holder',40);
      I.click('#tproDialogOk')
      I.waitForText('Holder Overview');
        
    }
    else {
      I.click(this.locators.menu_Management);
      I.click(this.locators.menu_CreateProperty);
      I.waitForText('Property Detail',40)
    }
    
  },
  
  SystemManagement() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_SystemManagement)
    I.waitForText('System Management',40)
  },
  
  SystemManagementSummary() {
    I.click(this.locators.menu_Management);
    I.click(this.locators.menu_SystemManagementSummary)
    I.waitForText('System Management Summary',40)
  },
  
  CreateNotificationTemplate() {
    I.click(this.locators.menu_OwnerNotification);
    I.click(this.locators.menu_CreateNotificationTemplate)
    I.waitForText('Letter Detail',40)
  },
  
  GenerateNotificationLetters() {
    I.click(this.locators.menu_OwnerNotification);
    I.click(this.locators.menu_GenerateNotificationLetters)
    I.waitForText('Generate Notification Letters',40)
  },
  
  NotificationTemplateOverview() {
    I.click(this.locators.menu_OwnerNotification);
    I.click(this.locators.menu_NotificationTemplateOverview)
    I.waitForText('Notification Template Overview',40)
  },
  
  ScanBarcodes() {
    I.click(this.locators.menu_OwnerNotification);
    I.click(this.locators.menu_ScanBarcodes)
    I.waitForText('Scan Barcodes',40)
  },
  
  AllocatePublishingCosts() {
    I.click(this.locators.menu_OwnerNotification);
    I.click(this.locators.menu_AllocatingPublishingCosts)
    I.waitForText('Allocate Publishing Costs',40)
  },
  
  GeneratePublication() {
    I.click(this.locators.menu_OwnerNotification);
    I.click(this.locators.menu_GeneratePublication)
    I.waitForText('Generate Publication',40)
  },
  
  ActivityLog() {
    I.click(this.locators.menu_Reports);
    I.click(this.locators.menu_ActivityLog)
    I.waitForText('Activity Log',40)
  },
  
  DataValidation() {
    I.click(this.locators.menu_Reports);
    I.click(this.locators.menu_DataValation)
    I.waitForText('Data Validation',40)
  },
  
  CreateReportTemplate() {
    I.click(this.locators.menu_Reports);
    I.click(this.locators.menu_CreateReportTemplate)
    I.waitForText('Report Template Details',40)
  },
  
  GenerateInternalReport() {
    I.click(this.locators.menu_Reports);
    I.click(this.locators.menu_GenerateInternalReport)
    I.waitForText('Generate Internal Report',40)
  },
  
  ReportTemplateOverview() {
    I.click(this.locators.menu_Reports);
    I.click(this.locators.menu_ReportTemplateOverview)
    I.waitForText('Report Template Overview',40)
  },
  
  ReportHistory() {
    I.click(this.locators.menu_Reports);
    I.click(this.locators.menu_ReportHistory)
    I.waitForText('Report History',40)
  },
  
  GenerateStateReport() {
    I.click(this.locators.menu_Reports);
    I.click(this.locators.menu_GenerateStateReport)
    I.waitForText('Generate State Reports',40)
  },
  
  StateReportOverview() {
    I.click(this.locators.menu_Reports);
    I.click(this.locators.menu_StateReportOverview)
    I.waitForText('State Report Overview',40)
  },
  
  SubmitStateReport() {
    I.click(this.locators.menu_Reports);
    I.click(this.locators.menu_SubmitStateReport)
    I.waitForText('Submit State Report',40)
  },
  
  ChangePassword() {
    I.click(this.locators.menu_Security);
    I.click(this.locators.menu_ChangePassword)
    I.waitForText('Change Password',40)
  },
  
  CreateRole() {
    I.click(this.locators.menu_Security);
    I.click(this.locators.menu_CreateRole)
    I.waitForText('Role Details',40)
  },
  
  RoleOverview() {
    I.click(this.locators.menu_Security);
    I.click(this.locators.menu_RoleOverview)
    I.waitForText('Role Overview',40)
  },
  
  AccessTokenOverview() {
    I.click(this.locators.menu_Security);
    I.click(this.locators.menu_AccessTokenOverview)
    I.waitForText('Access Token Overview',40)
  },
  
  LicenseKey() {
    I.click(this.locators.menu_Security);
    I.click(this.locators.menu_LicenseKey)
    I.waitForText('License Key Details',40)
  },
  
  SecurityAdministration() {
    I.click(this.locators.menu_Security);
    I.click(this.locators.menu_SecurityAdministration)
    I.waitForText('Security Administration',40)
  },
  
  SingleSignOn() {
    I.click(this.locators.menu_Security);
    I.click(this.locators.menu_SingleSignOn)
    I.waitForText('Single Sign-On',40)
  },
  
  CreateUser() {
    I.click(this.locators.menu_Security);
    I.click(this.locators.menu_CreateUser)
    I.waitForText('User Details',40)
  },
  
  UserOverview() {
    I.click(this.locators.menu_Security);
    I.click(this.locators.menu_UserOverview)
    I.waitForText('User Overview',40)
  },
  
  HomePage() {
    I.click(this.locators.logo_TrackerHome)
    I.waitForText('Unclaimed Property System',40)
  },
  
  ReportHistoryShortcut() {
    I.click(this.locators.menu_ReportHistoryShortcut)
    I.waitForText('Report History',40)
  },
  
}

