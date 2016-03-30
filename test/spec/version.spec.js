var naturalSort = require('../../index.js');
var expect      = require('chai').expect;

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

  it('more version numbers', function () {
    expect([
      '1.1.100',
      '1.1.1',
      '1.1.10',
      '1.1.54'
    ].sort(naturalSort())).to.eql([
      '1.1.1',
      '1.1.10',
      '1.1.54',
      '1.1.100'
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

  it('string last', function () {
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
      'myRelease-1.1.3',
      'myRelease-1.2.3',
      'myRelease-1.1.4',
      'myRelease-1.1.1',
      'myRelease-1.0.5'
    ].sort(naturalSort())).to.eql([
      'myRelease-1.0.5',
      'myRelease-1.1.1',
      'myRelease-1.1.3',
      'myRelease-1.1.4',
      'myRelease-1.2.3'
    ]);
  });
});
