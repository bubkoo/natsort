var natsort = require('../../index.js');
var expect  = require('chai').expect;


describe('desc support: ', function () {

  it('desc pre-sorted array', function () {
    expect([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f'
    ].sort(natsort({ desc: true }))).to.eql([
      'f',
      'd',
      'b',
      'E',
      'C',
      'A'
    ]);
  });

  it('desc un-sorted array', function () {
    expect([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f'
    ].sort(natsort({ desc: true }))).to.eql([
      'f',
      'd',
      'b',
      'E',
      'C',
      'A'
    ]);
  });


  it('asc pre-sorted array', function () {
    expect([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f'
    ].sort(natsort({ insensitive: false }))).to.eql([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f'
    ]);
  });

  it('asc un-sorted array', function () {
    expect([
      'A',
      'b',
      'C',
      'd',
      'E',
      'f'
    ].sort(natsort({ insensitive: false }))).to.eql([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f'
    ]);
  });
});
