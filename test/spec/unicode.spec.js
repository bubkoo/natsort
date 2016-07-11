var natsort = require('../../index.js');
var expect  = require('chai').expect;


describe('unicode: ', function () {

    it('basic latin', function () {
        expect([
            '\u0044',
            '\u0055',
            '\u0054',
            '\u0043'
        ].sort(natsort())).to.eql([
            '\u0043',
            '\u0044',
            '\u0054',
            '\u0055'
        ]);
    });

    it('unicode string', function () {
        expect([
            '\u30c6\u30b9\u30c8 10.txt',
            '\u30c6\u30b9\u30c8 2.txt',
        ].sort(natsort())).to.eql([
            '\u30c6\u30b9\u30c8 2.txt',
            '\u30c6\u30b9\u30c8 10.txt',
        ]);
    });

});
