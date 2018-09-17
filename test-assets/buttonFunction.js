module.exports = (wanted, testData ) => {
    wanted
    .click('@menuButton')
    .waitForElementVisible('@enterButton', 5000)
    .click('@enterButton')
    .waitForElementVisible('@hdr', 50000)
    .click('@menuButton')
    .waitForElementVisible('@modifyButton', 5000)
    .click('@modifyButton')
    .waitForElementVisible('@hdr', 50000)
    .click('@menuButton')
    .waitForElementVisible('@cancelButton', 5000)
    .click('@cancelButton')
    .waitForElementVisible('@wid', 50000)
    .click('@menuButton')
    .api.pause(500)
    wanted
    .waitForElementVisible('@homeButton', 5000)
    .click('@homeButton')
    
}