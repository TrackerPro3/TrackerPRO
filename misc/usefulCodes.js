
// use for of loops

var states = ['CA', 'MA'];
  var x;
  for (x of states) {
    I.scrollTo("//div[contains(text(),'" + x + "')]");
    I.click("//div[contains(text(),'" + x + "')]");
  }