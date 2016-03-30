var naturalSort = require('../../index.js');
var expect      = require('chai').expect;


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
