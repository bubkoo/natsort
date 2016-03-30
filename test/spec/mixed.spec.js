var naturalSort = require('../../index.js');
var expect      = require('chai').expect;

describe('mixed values types: ', function () {

  it('number always comes first', function () {

    var arr1 = ['a', 1];
    var arr2 = [1, 'a'];

    expect(arr1.sort(naturalSort())).to.eql(arr2);
    expect(arr2.sort(naturalSort())).to.eql(arr2);
  });

  it('number vs numeric string - should remain unchanged (error in chrome)', function () {

    var arr1 = ['1', 1];
    var arr2 = [1, '1'];

    expect(arr1.sort(naturalSort())).to.eql(arr1);
    expect(arr2.sort(naturalSort())).to.eql(arr2);
  });

  it('padding numeric string vs number', function () {

    var arr1 = ['02', 3, 2, '01'];
    var arr2 = ['01', '02', 2, 3];

    expect(arr1.sort(naturalSort())).to.eql(arr2);
  });

});
