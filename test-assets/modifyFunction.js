module.exports = (wanted, testData ) => {
    wanted
        .click('@menuButton')
        .waitForElementVisible('@modifyButton', 5000)
        .click('@modifyButton')
        .waitForElementVisible('@hdr', 50000)
        .setValue('@wid', testData.wid)
        .setValue('@hdr', testData.hdr)
        .setValue('@mke', testData.mke)
        .setValue('@ori', testData.ori)
        .setValue('@nam', testData.nam)
        .setValue('@sex', testData.sex)
        .setValue('@rac', testData.rac)
        .setValue('@hgt', testData.hgt)
        .setValue('@wgt', testData.wgt)
        .setValue('@hai', testData.hai)
        .setValue('@off', testData.off)
        .setValue('@dow', testData.dow)
        .setValue('@oln', testData.oln)
        .setValue('@ols', testData.ols)
        .setValue('@old', testData.old)
        .setValue('@lic', testData.lic)
        .setValue('@lis', testData.lis)
        .setValue('@liy', testData.liy)
        .click('@saveBtn')
}