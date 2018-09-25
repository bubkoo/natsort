import natsort from '../../src'

describe('mixed values types: ', () => {

  it('number always comes first', () => {

    const arr1 = ['a', 1]
    const arr2 = [1, 'a']

    expect(arr1.sort(natsort())).toEqual(arr2)
    expect(arr2.sort(natsort())).toEqual(arr2)
  })

  it('number vs numeric string - should remain unchanged (error in chrome)', () => {

    const arr1 = ['1', 1]
    const arr2 = [1, '1']

    expect(arr1.sort(natsort())).toEqual(arr1)
    expect(arr2.sort(natsort())).toEqual(arr2)
  })

  it('padding numeric string vs number', () => {

    const arr1 = ['02', 3, 2, '01']
    const arr2 = ['01', '02', 2, 3]

    expect(arr1.sort(natsort())).toEqual(arr2)
  })

})
