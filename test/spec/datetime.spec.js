var natsort = require('../../index.js');
var expect  = require('chai').expect;

describe('datetime: ', function () {

  it('similar dates', function () {

    expect([
      '10/12/2008',
      '10/11/2008',
      '10/11/2007',
      '10/12/2007'
    ].sort(natsort())).to.eql([
      '10/11/2007',
      '10/12/2007',
      '10/11/2008',
      '10/12/2008'
    ]);

    expect([
      '01/01/2008',
      '01/10/2008',
      '01/01/1992',
      '01/01/1991'
    ].sort(natsort())).to.eql([
      '01/01/1991',
      '01/01/1992',
      '01/01/2008',
      '01/10/2008'
    ]);
  });

  it('different timezones', function () {
    expect([
      'Wed Jan 01 2010 00:00:00 GMT-0800 (Pacific Standard Time)',
      'Thu Dec 31 2009 00:00:00 GMT-0800 (Pacific Standard Time)',
      'Wed Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)'
    ].sort(natsort())).to.eql([
      'Thu Dec 31 2009 00:00:00 GMT-0800 (Pacific Standard Time)',
      'Wed Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)',
      'Wed Jan 01 2010 00:00:00 GMT-0800 (Pacific Standard Time)'
    ]);
  });

  it('Short datetime', function () {

    expect([
      'Saturday, July 3, 2010 1:45 PM',
      'Saturday, July 3, 2010 1:45 AM',
      'Monday, August 2, 2010 1:45 PM',
      'Monday, May 3, 2010 1:45 PM'
    ].sort(natsort())).to.eql([
      'Monday, May 3, 2010 1:45 PM',
      'Saturday, July 3, 2010 1:45 AM',
      'Saturday, July 3, 2010 1:45 PM',
      'Monday, August 2, 2010 1:45 PM'
    ]);

    expect([
      'Saturday, July 3, 2010 1:45:30 PM',
      'Saturday, July 3, 2010 1:45:29 PM',
      'Monday, August 2, 2010 1:45:01 PM',
      'Monday, May 3, 2010 1:45:00 PM'
    ].sort(natsort())).to.eql([
      'Monday, May 3, 2010 1:45:00 PM',
      'Saturday, July 3, 2010 1:45:29 PM',
      'Saturday, July 3, 2010 1:45:30 PM',
      'Monday, August 2, 2010 1:45:01 PM'
    ]);

    expect([
      '2/15/2009 1:45 PM',
      '1/15/2009 1:45 PM',
      '2/15/2009 1:45 AM'
    ].sort(natsort())).to.eql([
      '1/15/2009 1:45 PM',
      '2/15/2009 1:45 AM',
      '2/15/2009 1:45 PM'
    ]);
  });

  it('Date.toString(), Date.toLocaleString()', function () {
    expect( [
      'Saturday, July 3, 2010',
      'Monday, August 2, 2010',
      'Monday, May 3, 2010'
    ].sort(natsort())).to.eql( [
      'Monday, May 3, 2010',
      'Saturday, July 3, 2010',
      'Monday, August 2, 2010'
    ]);
  });

  it('Date.toUTCString()', function () {
    expect([
      'Mon, 15 Jun 2009 20:45:30 GMT',
      'Mon, 3 May 2010 17:45:30 GMT',
      'Mon, 15 Jun 2009 17:45:30 GMT'
    ].sort(natsort())).to.eql([
      'Mon, 15 Jun 2009 17:45:30 GMT',
      'Mon, 15 Jun 2009 20:45:30 GMT',
      'Mon, 3 May 2010 17:45:30 GMT'
    ]);
  });

  it('ISO8601 Dates', function () {
    expect([
      '2010-06-15T13:45:30',
      '2009-06-15T13:45:30',
      '2009-06-15T01:45:30.2',
      '2009-01-15T01:45:30'
    ].sort(natsort())).to.eql([
      '2009-01-15T01:45:30',
      '2009-06-15T01:45:30.2',
      '2009-06-15T13:45:30',
      '2010-06-15T13:45:30'
    ]);
  });

  it('ISO8601-ish YYYY-MM-DDThh:mm:ss - which does not parse into a Date instance', function () {
    expect([
      '2010-06-15 13:45:30',
      '2009-06-15 13:45:30',
      '2009-01-15 01:45:30'
    ].sort(natsort())).to.eql([
      '2009-01-15 01:45:30',
      '2009-06-15 13:45:30',
      '2010-06-15 13:45:30'
    ]);
  });

  it('RFC1123 testing different timezones', function () {
    expect([
      'Mon, 15 Jun 2009 20:45:30 GMT',
      'Mon, 15 Jun 2009 20:45:30 PDT',
      'Mon, 15 Jun 2009 20:45:30 EST'
    ].sort(natsort())).to.eql([
      'Mon, 15 Jun 2009 20:45:30 GMT',
      'Mon, 15 Jun 2009 20:45:30 EST',
      'Mon, 15 Jun 2009 20:45:30 PDT'
    ]);
  });

  it('unix epoch, Date.getTime()', function () {
    expect([
      '1245098730000',
      '14330728000',
      '1245098728000'
    ].sort(natsort())).to.eql([
      '14330728000',
      '1245098728000',
      '1245098730000'
    ]);
  });

});
