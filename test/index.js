var naturalSort = require('../index.js');
var expect      = require('chai').expect;


describe('different values types: ', function () {

    it('number always comes first', function () {

        var arr1 = ['a', 1];
        var arr2 = [1, 'a'];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
        expect(arr2.sort(naturalSort())).to.eql(arr2);
    });

    it('number vs numeric string - should remain unchanged (error in chrome)', function () {

        var arr1 = ['1', 1];
        var arr2 = [1, '1'];

        expect(arr1.sort(naturalSort())).to.eql(arr1);
        expect(arr2.sort(naturalSort())).to.eql(arr2);
    });

    it('padding numeric string vs number', function () {

        var arr1 = ['02', 3, 2, '01'];
        var arr2 = ['01', '02', 2, 3];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });
});

describe('datetime: ', function () {

    it('similar dates', function () {

        var arr1 = ['10/12/2008', '10/11/2008', '10/11/2007', '10/12/2007'];
        var arr2 = ['10/11/2007', '10/12/2007', '10/11/2008', '10/12/2008'];

        expect(arr1.sort(naturalSort())).to.eql(arr2);

        var arr3 = ['01/01/2008', '01/10/2008', '01/01/1992', '01/01/1991'];
        var arr4 = ['01/01/1991', '01/01/1992', '01/01/2008', '01/10/2008'];

        expect(arr3.sort(naturalSort())).to.eql(arr4);
    });

    it('javascript toString(), different timezones', function () {

        var arr1 = [
            'Wed Jan 01 2010 00:00:00 GMT-0800 (Pacific Standard Time)',
            'Thu Dec 31 2009 00:00:00 GMT-0800 (Pacific Standard Time)',
            'Wed Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)'
        ];
        var arr2 = [
            'Thu Dec 31 2009 00:00:00 GMT-0800 (Pacific Standard Time)',
            'Wed Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)',
            'Wed Jan 01 2010 00:00:00 GMT-0800 (Pacific Standard Time)'
        ];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('Date.toString(), Date.toLocaleString()', function () {

        var arr1 = [
            'Saturday, July 3, 2010',
            'Monday, August 2, 2010',
            'Monday, May 3, 2010'
        ];
        var arr2 = [
            'Monday, May 3, 2010',
            'Saturday, July 3, 2010',
            'Monday, August 2, 2010'
        ];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('Date.toUTCString()', function () {

        var arr1 = [
            'Mon, 15 Jun 2009 20:45:30 GMT',
            'Mon, 3 May 2010 17:45:30 GMT',
            'Mon, 15 Jun 2009 17:45:30 GMT'
        ];
        var arr2 = [
            'Mon, 15 Jun 2009 17:45:30 GMT',
            'Mon, 15 Jun 2009 20:45:30 GMT',
            'Mon, 3 May 2010 17:45:30 GMT'
        ];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('ISO8601 Dates', function () {
        expect([
            '2010-06-15T13:45:30',
            '2009-06-15T13:45:30',
            '2009-06-15T01:45:30.2',
            '2009-01-15T01:45:30'
        ].sort(naturalSort())).to.eql([
            '2009-01-15T01:45:30',
            '2009-06-15T01:45:30.2',
            '2009-06-15T13:45:30',
            '2010-06-15T13:45:30'
        ]);
    });

    it('ISO8601-ish YYYY-MM-DDThh:mm:ss - which does not parse into a Date instance', function () {
        expect([
            '2010-06-15 13:45:30',
            '2009-06-15 13:45:30',
            '2009-01-15 01:45:30'
        ].sort(naturalSort())).to.eql([
            '2009-01-15 01:45:30',
            '2009-06-15 13:45:30',
            '2010-06-15 13:45:30'
        ]);
    });

    it('RFC1123 testing different timezones', function () {
        expect([
            'Mon, 15 Jun 2009 20:45:30 GMT',
            'Mon, 15 Jun 2009 20:45:30 PDT',
            'Mon, 15 Jun 2009 20:45:30 EST'
        ].sort(naturalSort())).to.eql([
            'Mon, 15 Jun 2009 20:45:30 GMT',
            'Mon, 15 Jun 2009 20:45:30 EST',
            'Mon, 15 Jun 2009 20:45:30 PDT'
        ]);
    });

    it('unix epoch, Date.getTime()', function () {
        expect([
            '1245098730000',
            '14330728000',
            '1245098728000'
        ].sort(naturalSort())).to.eql([
            '14330728000',
            '1245098728000',
            '1245098730000'
        ]);
    });

    it('Short datetime', function () {

        expect([
            'Saturday, July 3, 2010 1:45 PM',
            'Saturday, July 3, 2010 1:45 AM',
            'Monday, August 2, 2010 1:45 PM',
            'Monday, May 3, 2010 1:45 PM'
        ].sort(naturalSort())).to.eql([
            'Monday, May 3, 2010 1:45 PM',
            'Saturday, July 3, 2010 1:45 AM',
            'Saturday, July 3, 2010 1:45 PM',
            'Monday, August 2, 2010 1:45 PM'
        ]);

        expect([
            'Saturday, July 3, 2010 1:45:30 PM',
            'Saturday, July 3, 2010 1:45:29 PM',
            'Monday, August 2, 2010 1:45:01 PM',
            'Monday, May 3, 2010 1:45:00 PM'
        ].sort(naturalSort())).to.eql([
            'Monday, May 3, 2010 1:45:00 PM',
            'Saturday, July 3, 2010 1:45:29 PM',
            'Saturday, July 3, 2010 1:45:30 PM',
            'Monday, August 2, 2010 1:45:01 PM'
        ]);

        expect([
            '2/15/2009 1:45 PM',
            '1/15/2009 1:45 PM',
            '2/15/2009 1:45 AM'
        ].sort(naturalSort())).to.eql([
            '1/15/2009 1:45 PM',
            '2/15/2009 1:45 AM',
            '2/15/2009 1:45 PM'
        ]);
    });

});

describe('version number strings: ', function () {

    it('close version numbers', function () {
        expect([
            '1.0.2',
            '1.0.1',
            '1.0.0',
            '1.0.9'
        ].sort(naturalSort())).to.eql([
            '1.0.0',
            '1.0.1',
            '1.0.2',
            '1.0.9'
        ]);
    });

    it('multi-digit branch release', function () {
        expect([
            '1.0.03',
            '1.0.003',
            '1.0.002',
            '1.0.0001'
        ].sort(naturalSort())).to.eql([
            '1.0.0001',
            '1.0.002',
            '1.0.003',
            '1.0.03'
        ]);
    });

    it('close version numbers', function () {
        expect([
            '1.1beta',
            '1.1.2alpha3',
            '1.0.2alpha3',
            '1.0.2alpha1',
            '1.0.1alpha4',
            '2.1.2',
            '2.1.1'
        ].sort(naturalSort())).to.eql([
            '1.0.1alpha4',
            '1.0.2alpha1',
            '1.0.2alpha3',
            '1.1.2alpha3',
            '1.1beta',
            '2.1.1',
            '2.1.2'
        ]);
    });

    it('string first', function () {
        expect([
            'myrelease-1.1.3',
            'myrelease-1.2.3',
            'myrelease-1.1.4',
            'myrelease-1.1.1',
            'myrelease-1.0.5'
        ].sort(naturalSort())).to.eql([
            'myrelease-1.0.5',
            'myrelease-1.1.1',
            'myrelease-1.1.3',
            'myrelease-1.1.4',
            'myrelease-1.2.3'
        ]);
    });
});

describe('numerics: ', function () {

    it('string vs number', function () {

        var arr1 = ['10', 9, 2, '1', '4'];
        var arr2 = ['1', 2, '4', 9, '10'];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('0 left-padded numbers', function () {
        var arr1 = ['0001', '002', '001'];
        var arr2 = ['0001', '001', '002'];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('0 left-padded numbers and regular numbers', function () {
        var arr1 = ['10.0401', 10.022, 10.042, '10.021999'];
        var arr2 = ['10.021999', 10.022, '10.0401', 10.042];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('decimal string vs decimal, same precision', function () {
        var arr1 = ['10.04', 10.02, 10.03, '10.01'];
        var arr2 = ['10.01', 10.02, 10.03, '10.04'];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('decimal string vs decimal, different precision', function () {
        var arr1 = ['10.0401', 10.022, 10.042, '10.021999'];
        var arr2 = ['10.021999', 10.022, '10.0401', 10.042];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('float/decimal with \'F\' or \'D\' notation', function () {
        var arr1 = ['10.04f', '10.039F', '10.038d', '10.037D'];
        var arr2 = ['10.037D', '10.038d', '10.039F', '10.04f'];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('not foat/decimal notation', function () {
        var arr1 = ['10.004Z', '10.039T', '10.038ooo', '10.037g'];
        var arr2 = ['10.004Z', '10.037g', '10.038ooo', '10.039T'];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('scientific notation', function () {
        var arr1 = ['1.528535047e5', '1.528535047e7', '1.528535047e3'];
        var arr2 = ['1.528535047e3', '1.528535047e5', '1.528535047e7'];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('negative numbers as strings', function () {
        var arr1 = ['-1', '-2', '4', '-3', '0', '-5'];
        var arr2 = ['-5', '-3', '-2', '-1', '0', '4'];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('negative numbers as strings - mixed input type, string + numeric', function () {
        var arr1 = [-1, '-2', 4, -3, '0', '-5'];
        var arr2 = ['-5', -3, '-2', -1, '0', 4];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });

    it('negative floats - all numeric', function () {
        var arr1 = [-2.01, -2.1, 4.144, 4.1, -2.001, -5];
        var arr2 = [-5, -2.1, -2.01, -2.001, 4.1, 4.144];

        expect(arr1.sort(naturalSort())).to.eql(arr2);
    });
});

describe('ip addresses: ', function () {

    it('ipv4', function () {
        expect([
            '192.168.0.100',
            '192.168.0.1',
            '192.168.1.1',
            '192.168.0.250',
            '192.168.1.123',
            '10.0.0.2',
            '10.0.0.1'
        ].sort(naturalSort())).to.eql([
            '10.0.0.1',
            '10.0.0.2',
            '192.168.0.1',
            '192.168.0.100',
            '192.168.0.250',
            '192.168.1.1',
            '192.168.1.123'
        ]);
    });

});

describe('filenames: ', function () {

    it('simple image filenames', function () {
        expect([
            'img12.png',
            'img10.png',
            'img2.png',
            'img1.png'
        ].sort(naturalSort())).to.eql([
            'img1.png',
            'img2.png',
            'img10.png',
            'img12.png'
        ]);
    });

    it('complex filenames', function () {
        expect([
            'car.mov',
            '01alpha.sgi',
            '001alpha.sgi',
            'my.string_41299.tif',
            'organic2.0001.sgi'
        ].sort(naturalSort())).to.eql([
            '001alpha.sgi',
            '01alpha.sgi',
            'car.mov',
            'my.string_41299.tif',
            'organic2.0001.sgi'
        ]);
    });

    it('unix filenames', function () {
        expect([
            './system/kernel/js/01_ui.core.js',
            './system/kernel/js/00_jquery-1.3.2.js',
            './system/kernel/js/02_my.desktop.js'
        ].sort(naturalSort())).to.eql([
            './system/kernel/js/00_jquery-1.3.2.js',
            './system/kernel/js/01_ui.core.js',
            './system/kernel/js/02_my.desktop.js'
        ]);
    });
});

describe('hex: ', function () {

    it('real hex numbers', function () {
        expect([
            '0xA', '0x9', '0x99'
        ].sort(naturalSort())).to.eql([
            '0x9', '0xA', '0x99'
        ]);
    });

    it('fake hex numbers', function () {
        expect([
            '0xZZ', '0xVVV', '0xVEV', '0xUU'
        ].sort(naturalSort())).to.eql([
            '0xUU', '0xVEV', '0xVVV', '0xZZ'
        ]);
    });

});

describe('unicode: ', function () {

    it('real unicode', function () {
        expect([
            '\u0044',
            '\u0055',
            '\u0054',
            '\u0043'
        ].sort(naturalSort())).to.eql([
            '\u0043',
            '\u0044',
            '\u0054',
            '\u0055'
        ]);
    });

});

describe('handle of space: ', function () {

    it('space(s) as first character(s)', function () {
        expect([
            'alpha', ' 1', '  3', ' 2', 0
        ].sort(naturalSort())).to.eql([
            0, ' 1', ' 2', '  3', 'alpha'
        ]);
    });

    it('empty strings and space character', function () {
        expect([
            '10023', '999', '', 2, 5.663, 5.6629
        ].sort(naturalSort())).to.eql([
            '', 2, 5.6629, 5.663, '999', '10023'
        ]);

        expect([
            0, '0', ''
        ].sort(naturalSort())).to.eql([
            '', 0, '0'
        ]);
    });

});

describe('contributed tests: ', function () {

    it('contributed by Bob Zeiner', function () {
        expect([
            'T78', 'U17', 'U10', 'U12', 'U14', '745', 'U7', '01', '485', 'S16', 'S2', 'S22', '1081', 'S25', '1055', '779', '776', '771', '44', '4', '87', '1091', '42', '480', '952', '951', '756', '1000', '824', '770', '666', '633', '619', '1', '991', '77H', 'PIER-7', '47', '29', '9', '77L', '433'
        ].sort(naturalSort())).to.eql([
            '01', '1', '4', '9', '29', '42', '44', '47', '77H', '77L', '87', '433', '480', '485', '619', '633', '666', '745', '756', '770', '771', '776', '779', '824', '951', '952', '991', '1000', '1055', '1081', '1091', 'PIER-7', 'S2', 'S16', 'S22', 'S25', 'T78', 'U7', 'U10', 'U12', 'U14', 'U17'
        ]);
    });

    it('contributed by Scott', function () {
        expect([
            "FSI stop, Position: 5",
            "Mail Group stop, Position: 5",
            "Mail Group stop, Position: 5",
            "FSI stop, Position: 6",
            "FSI stop, Position: 6",
            "Newsstand stop, Position: 4",
            "Newsstand stop, Position: 4",
            "FSI stop, Position: 5"
        ].sort(naturalSort())).to.eql([
            "FSI stop, Position: 5",
            "FSI stop, Position: 5",
            "FSI stop, Position: 6",
            "FSI stop, Position: 6",
            "Mail Group stop, Position: 5",
            "Mail Group stop, Position: 5",
            "Newsstand stop, Position: 4",
            "Newsstand stop, Position: 4"
        ]);
    });
});
