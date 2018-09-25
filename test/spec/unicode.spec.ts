import natsort from '../../src'

describe('unicode: ', () => {

  it('basic latin', () => {
    expect([
      '\u0044',
      '\u0055',
      '\u0054',
      '\u0044',
      '\u0043',
    ].sort(natsort())).toEqual([
      '\u0043',
      '\u0044',
      '\u0044',
      '\u0054',
      '\u0055',
    ])
  })

  it('unicode string', () => {
    expect([
      '\u30c6\u30b9\u30c8',
      '\u30c6\u30b9\u30c8 10.txt',
      '\u30c6\u30b9\u30c8',
    ].sort(natsort())).toEqual([
      '\u30c6\u30b9\u30c8',
      '\u30c6\u30b9\u30c8',
      '\u30c6\u30b9\u30c8 10.txt',
    ])
  })

})
