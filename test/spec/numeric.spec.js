var naturalSort = require('../../index.js');
var expect      = require('chai').expect;


describe('numeric: ', function () {

  it('string vs number', function () {
    expect([
      '10',
      9,
      2,
      '1',
      '4'
    ].sort(naturalSort())).to.eql([
      '1',
      2,
      '4',
      9,
      '10'
    ]);
  });

  it('0 left-padded numbers', function () {
    expect([
      '0001',
      '002',
      '001'
    ].sort(naturalSort())).to.eql([
      '0001',
      '001',
      '002'
    ]);
  });

  it('0 left-padded numbers and regular numbers', function () {
    expect([
      '10.0401',
      10.022,
      10.042,
      '10.021999'
    ].sort(naturalSort())).to.eql([
      '10.021999',
      10.022,
      '10.0401',
      10.042
    ]);
  });

  it('decimal string vs decimal, same precision', function () {
    expect([
      '10.04',
      10.02,
      10.03,
      '10.01'
    ].sort(naturalSort())).to.eql([
      '10.01',
      10.02,
      10.03,
      '10.04'
    ]);
  });

  it('decimal string vs decimal, different precision', function () {
    expect([
      '10.0401',
      10.022,
      10.042,
      '10.021999'
    ].sort(naturalSort())).to.eql([
      '10.021999',
      10.022,
      '10.0401',
      10.042
    ]);
  });

  it('float/decimal with \'F\' or \'D\' notation', function () {
    expect([
      '10.04f',
      '10.039F',
      '10.038d',
      '10.037D'
    ].sort(naturalSort())).to.eql([
      '10.037D',
      '10.038d',
      '10.039F',
      '10.04f'
    ]);
  });

  it('not float/decimal notation', function () {
    expect([
      '10.004Z',
      '10.039T',
      '10.038ooo',
      '10.037g'
    ].sort(naturalSort())).to.eql([
      '10.004Z',
      '10.037g',
      '10.038ooo',
      '10.039T'
    ]);
  });

  it('scientific notation', function () {
    expect([
      '1.528535047e5',
      '1.528535047e7',
      '1.528535047e3'
    ].sort(naturalSort())).to.eql([
      '1.528535047e3',
      '1.528535047e5',
      '1.528535047e7'
    ]);
  });

  it('negative numbers as strings', function () {
    expect([
      '-1',
      '-2',
      '4',
      '-3',
      '0',
      '-5'
    ].sort(naturalSort())).to.eql([
      '-5',
      '-3',
      '-2',
      '-1',
      '0',
      '4'
    ]);
  });

  it('negative numbers as strings - mixed input type, string + numeric', function () {
    expect([
      -1,
      '-2',
      4,
      -3,
      '0',
      '-5'
    ].sort(naturalSort())).to.eql([
      '-5',
      -3,
      '-2',
      -1,
      '0',
      4
    ]);
  });

  it('negative floats - all numeric', function () {
    expect([
      -2.01,
      -2.1,
      4.144,
      4.1,
      -2.001,
      -5
    ].sort(naturalSort())).to.eql([
      -5,
      -2.1,
      -2.01,
      -2.001,
      4.1,
      4.144
    ]);
  });
});
