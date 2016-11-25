module.exports = {
  'Show match test': function (client) {
    // Steps to execute
    client.url('http://localhost:2000/')
      .click('.header-link')
      .waitForElementVisible('input[name="title"]', 5000)
      .setValue('input[name="title"]', 'BSE vs Stowmarket')
      .setValue('input[name="date"]', '11/12/2106')
      .setValue('input[name="time"]', '11:00')
      .click('button[type="submit"]')
      .waitForElementVisible('#currentMatches .section', 5000)
      .click('#currentMatches .section .button.button-large')
      .assert.containsText('.ViewMatch-header', 'BSE vs Stowmarket');

    client.end();
  }
};
