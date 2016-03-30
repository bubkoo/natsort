var natsort = require('../../index.js');
var expect  = require('chai').expect;


describe('debug: ', function () {

  it('string first', function () {
    expect([
      'myRelease-1.1.3',
      'myRelease-1.2.3',
      'myRelease-1.1.4',
      'myRelease-1.1.1',
      'myRelease-1.0.5'
    ].sort(natsort())).to.eql([
      'myRelease-1.0.5',
      'myRelease-1.1.1',
      'myRelease-1.1.3',
      'myRelease-1.1.4',
      'myRelease-1.2.3'
    ]);
  });

});
