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

});
