module.exports = {
    validTest: [
        {
            wid: '1234567890',
            hdr: 'Sam Smith',
            mke: 'abc',
            ori: '123456789',
            nam: 'Sam Smith',
            sex: 'Male',
            rac: 'W',
            hai: 'Blonde',
            hgt: '509',
            wgt: '200',
            off: 'Arson',
            dow: '08/01/2018',
            oln: 'a123456',
            ols: 'UT',
            old: '09/01/2019',
            lic: '93hg123',
            lis: 'UT',
            liy: '10/10/2018',
            queryBody: 'Sam Smith.abc.123456789.Sam Smith.M.W.509.200.Blonde.Arson.2018-08-01.a123456.UT.2019-09-01.93hg123.UT.2018-10-10',
        },
        {
            wid: '1234567890',
            hdr: 'Sam Smith',
            mke: 'abc',
            ori: '123456789',
            nam: 'Sam Smith',
            sex: 'Male',
            rac: 'W',
            hai: 'Blonde',
            hgt: '509',
            wgt: '200',
            off: 'Arson',
            dow: '08/01/2018',
            oln: 'a123456',
            ols: 'UT',
            old: '09/01/2019',
            lic: '93hg123',
            lis: 'UT',
            liy: '10/10/2018',
            queryBody: '1234567890.Sam Smith.abc.123456789.Sam Smith.M.W.509.200.Blonde.Arson.2018-08-01.a123456.UT.2019-09-01.93hg123.UT.2018-10-10',
        }

    ],
    invalidTest: [
        {
            hdr: 'Sam Smith',
            mke: 'abc',
            ori: '123456789',
            nam: 'Sam Smith',
            sex: 'Male',
            rac: 'W',
            hai: 'Blonde',
            hgt: '509',
            wgt: '200',
            off: 'Arson',
            dow: '08/01/2018',
            oln: 'a123456',
            ols: 'U',
            old: '09/01/2019',
            lic: '93hg123',
            lis: 'UT',
            liy: '10/10/2018',
            error: 'The "DL State" field should be 2 characters long.',
        }
    ],
    invalidWarrantTest: [
        {
            wid: '1',
            hdr: 'Sam Smith',
            mke: 'abc',
            ori: '123456789',
            nam: 'Sam Smith',
            sex: 'Male',
            rac: 'W',
            hai: 'Blonde',
            hgt: '509',
            wgt: '200',
            off: 'Arson',
            dow: '08/01/2018',
            oln: 'a123456',
            ols: 'UT',
            old: '09/01/2019',
            lic: '93hg123',
            lis: 'UT',
            liy: '10/10/2018',
            error: 'The "Warrant ID" field should be 10 characters long.', 
        }
    ],
    cancelWarrantInvaild: [
        {
            wid: '123456789',
            res: 'Wrong Person',
            dat: '09/11/2018',
            error: 'The "Warrant ID" field should be 10 characters long.',
        }
    ]

}