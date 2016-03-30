var naturalSort = require('../../index.js');
var expect      = require('chai').expect;


describe('case insensitive support: ', function () {

  it('case sensitive pre-sorted array', function () {
    expect([
      'A',
      'b',
      'C',
      'd',
      'E',
      'f'
    ].sort(naturalSort({ insensitive: true }))).to.eql([
      'A',
      'b',
      'C',
      'd',
      'E',
      'f'
    ]);
  });

  it('case sensitive un-sorted array', function () {
    expect([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f'
    ].sort(naturalSort({ insensitive: true }))).to.eql([
      'A',
      'b',
      'C',
      'd',
      'E',
      'f'
    ]);
  });


  it('case insensitive pre-sorted array', function () {
    expect([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f'
    ].sort(naturalSort({ insensitive: false }))).to.eql([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f'
    ]);
  });

  it('case insensitive un-sorted array', function () {
    expect([
      'A',
      'b',
      'C',
      'd',
      'E',
      'f'
    ].sort(naturalSort({ insensitive: false }))).to.eql([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f'
    ]);
  });
});
