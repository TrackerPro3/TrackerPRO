Feature('Rahul');

Scenario('Rahul Test', async ({ I }) => {

    I.amOnPage('https://www.w3schools.com/')
    I.click('Tutorials')
    I.click('Learn HTML')
    I.wait(5)
    I.executeScript("window.history.back()")

   
    I.wait(15)
});