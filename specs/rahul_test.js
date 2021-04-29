Feature('Rahul');

Scenario('Rahul Test', async ({ I }) => {

    I.amOnPage('file:///C:/Users/RC08508/Downloads/index.html');

    I.scrollPageToBottom();
    I.switchTo('#test-4-div');
    I.click('#drag1')
    I.dragAndDrop('#drag1','#div1');
    I.switchTo('#div1');

   
    I.wait(15)
});