module.exports = {
  url: function () {
    return this.launchUrl + '/match/new';
  },
  elements: {
    titleField: 'input[name="title"]',
    dateField: 'input[name="date"]',
    timeField: 'input[name="time"]',
    submitButton: 'button[type="submit"]'
  }
};
