var natsort = require('../../index.js');
var expect  = require('chai').expect;

describe('sparse array sort: ', function () {

  it('simple sparse array', function () {
    var arr1 = [3, 2];
    var arr2 = [1, 2, 3];

    arr1[10] = 1;

    for (var i = 0; i < 8; i++) {
      arr2.push(undefined);
    }

    arr1.sort(natsort());

    for (i = 0; i < 3; i++) {
      expect(arr1[i]).to.equal(arr2[i]);
    }
  });

});

