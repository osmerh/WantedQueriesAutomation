var buttonFunction = require('../test-assets/buttonFunction')
var cancelFunction = require('../test-assets/cancelFunction')
var modifyFunction = require('../test-assets/modifyFunction')
var enterFunction = require('../test-assets/enterFunction')
var testData = require('../test-assets/testData')
var wanted = ''

module.exports = {
    beforeEach: function (browser) {
        wanted = browser.page.wanted();
        wanted.navigate()
        .waitForElementVisible('@menuButton', 5000)

    },
    after: browser => {
        browser.end()
    }, //https://dmutah.atlassian.net/browse/Q7O-44
    'Menu Button & Home Screen': browser => {
        wanted
            buttonFunction(wanted)
            wanted
            .expect.element('div[id="welcomeScreen"]').text.to.contain('Welcome')
    },//https://dmutah.atlassian.net/browse/Q7O-46
    'New Valid Enter Info': browser => {
        enterFunction(wanted, testData.validTest[0])
        wanted
        .expect.element('@queryBody').text.to.contain(testData.validTest[0].queryBody).after(500)
    },//https://dmutah.atlassian.net/browse/Q7O-46
    'New Invalid Enter Info': browser => {
        enterFunction(wanted, testData.invalidTest[0])
        wanted
        .expect.element('@error').text.to.contain(testData.invalidTest[0].error).after(500)
    },//https://dmutah.atlassian.net/browse/Q7O-49
    'Modify Warrant Vaild Info': browser => {
        modifyFunction(wanted, testData.validTest[1])
        wanted
        .expect.element('@queryBody').text.to.contain(testData.validTest[1].queryBody).after(500)
    },//https://dmutah.atlassian.net/browse/Q7O-49
    'Modify Warrant Invalid Info': browser => {
        modifyFunction(wanted, testData.invalidWarrantTest[0])
        wanted
        .expect.element('@error').text.to.contain(testData.invalidWarrantTest[0].error).after(500)
    },//https://dmutah.atlassian.net/browse/Q7O-54
    'Cancel Warrant Invalid Info': browser => {
        cancelFunction(wanted, testData.cancelWarrantInvaild[0])
        wanted
        .expect.element('@error').text.to.contain(testData.cancelWarrantInvaild[0].error).after(500)
    }
}