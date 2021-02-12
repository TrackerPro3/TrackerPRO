
Feature('Quick Links');

let Login = require('C:/Users/RC08508/CodeceptJS/pages/login_locators.js');
let QuickLinks = require('C:/Users/RC08508/CodeceptJS/pages/quicklinks_locators.js');
let data = require('C:/Users/RC08508/CodeceptJS/testdata/data.js');
let pup = require('../utilities/pup.js');





Before(async ({ I }) => { // or Background
  Login.SelectBuild(data.login.Build);   // input Build Name
  Login.Username(data.login.Username);    // input Username
  Login.Password(data.login.defaultPassword); // input default Password
  Login.ActualPassword(await I.grabTextFrom(Login.locators.alertContent), data.login.Password);   // input Password
  Login.MustChange(await I.grabTitle(),data.login.newPassword);   // input New Password
  Login.OrgPage(await I.grabTitle(),data.login.Org);     // input Org Name
});

// After(() => {
//   pup.closeBrowser();
// })




  Scenario("Test QuickLinks", async ({ I }) => {
   
    QuickLinks.ExportData();
    QuickLinks.ImportData();
    QuickLinks.ImportManagment();
    QuickLinks.CreateFileMapping();
    QuickLinks.FileMappingOverview();
    QuickLinks.DeleteRecords();
    QuickLinks.ModifyRecords();
    QuickLinks.RelocateData();
    QuickLinks.RollbackImport();
    QuickLinks.RollbackStateReport();
    QuickLinks.UpdateCheckNumber();
    QuickLinks.CreateHolder();
    QuickLinks.HolderOverview();
    QuickLinks.CreateOrganization();
    QuickLinks.OrganizationOverview();
    QuickLinks.CreateOwner();
    QuickLinks.OwnerOverview();
    QuickLinks.PropertyOverview();
    await QuickLinks.CreateProperty();
    QuickLinks.SystemManagement();
    QuickLinks.SystemManagementSummary();
    QuickLinks.CreateNotificationTemplate();
    QuickLinks.GenerateNotificationLetters();
    QuickLinks.NotificationTemplateOverview();
    QuickLinks.ScanBarcodes();
    QuickLinks.AllocatePublishingCosts();
    QuickLinks.GeneratePublication();
    QuickLinks.ActivityLog();
    QuickLinks.DataValidation();
    QuickLinks.CreateReportTemplate();
    QuickLinks.GenerateInternalReport();
    QuickLinks.ReportTemplateOverview();
    QuickLinks.GenerateStateReport();
    QuickLinks.StateReportOverview();
    QuickLinks.SubmitStateReport();
    QuickLinks.ChangePassword();
    QuickLinks.CreateRole();
    QuickLinks.RoleOverview();
    QuickLinks.AccessTokenOverview();
    QuickLinks.LicenseKey();
    QuickLinks.SecurityAdministration();
    QuickLinks.SingleSignOn();
    QuickLinks.CreateUser();
    QuickLinks.UserOverview();
    QuickLinks.Preferences();
    QuickLinks.ReportHistoryShortcut();
    QuickLinks.HomePage();
    I.wait(5)

    

  });
