module.exports = (wanted, testData ) => {
    wanted
        .click('@menuButton')
        .waitForElementVisible('@cancelButton', 5000)
        .click('@cancelButton')
        .waitForElementVisible('@wid', 50000)
        .setValue('@wid', testData.wid)
        .setValue('@res', testData.res)
        .setValue('@dat', testData.dat)
        .click('@saveBtn')
}