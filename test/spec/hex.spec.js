var naturalSort = require('../../index.js');
var expect      = require('chai').expect;


describe('hex: ', function () {

  it('real hex numbers', function () {
    expect([
      '0xA',
      '0x9',
      '0x99'
    ].sort(naturalSort())).to.eql([
      '0x9',
      '0xA',
      '0x99'
    ]);
  });

  it('fake hex numbers', function () {
    expect([
      '0xZZ',
      '0xVVV',
      '0xVEV',
      '0xUU'
    ].sort(naturalSort())).to.eql([
      '0xUU',
      '0xVEV',
      '0xVVV',
      '0xZZ'
    ]);
  });

});
