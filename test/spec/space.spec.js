var natsort = require('../../index.js');
var expect  = require('chai').expect;


describe('handle of space: ', function () {

  it('space(s) as first character(s)', function () {
    expect([
      'alpha',
      ' 1',
      '  3',
      ' 2',
      0
    ].sort(natsort())).to.eql([
      0,
      ' 1',
      ' 2',
      '  3',
      'alpha'
    ]);
  });

  it('empty strings and space character', function () {
    expect([
      '10023',
      '999',
      '',
      2,
      5.663,
      5.6629
    ].sort(natsort())).to.eql([
      '',
      2,
      5.6629,
      5.663,
      '999',
      '10023'
    ]);

    expect([
      0,
      '0',
      '',
      ''
    ].sort(natsort())).to.eql([
      '',
      '',
      0,
      '0'
    ]);
  });

});
