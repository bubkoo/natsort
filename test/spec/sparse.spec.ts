import natsort from '../../src'

describe('sparse array sort: ', () => {

  it('simple sparse array', () => {
    const arr1 = [3, 2]
    const arr2 = [1, 2, 3]

    arr1[10] = 1

    arr1.sort(natsort())

    for (let i = 0; i < 3; i += 1) {
      expect(arr1[i]).toBe(arr2[i])
    }
  })

})
