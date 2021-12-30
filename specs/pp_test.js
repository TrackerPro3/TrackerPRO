
Feature('Pinpoint Application');


Scenario('test something', ({ I }) => {


    I.amOnPage("https://23.253.186.150:8235/")
    I.see('forgotten password?')
    I.fillField("//input[@id='LoginForm:userControl']", "stscorp");
    I.fillField("//input[@id='LoginForm:pwdControl']", "Admin01!");
    I.click("//a[@id='LoginForm:btnLogin']");
    I.see("Welcome");
    I.moveCursorTo(".transactions");
    I.wait(5);
    I.click('Statistics')
});

