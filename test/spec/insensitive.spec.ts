import natsort from '../../src'

describe('case insensitive support: ', () => {

  it('case sensitive pre-sorted array', () => {
    expect([
      'A',
      'b',
      'C',
      'd',
      'E',
      'f',
    ].sort(natsort({ insensitive: true }))).toEqual([
      'A',
      'b',
      'C',
      'd',
      'E',
      'f',
    ])
  })

  it('case sensitive un-sorted array', () => {
    expect([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f',
    ].sort(natsort({ insensitive: true }))).toEqual([
      'A',
      'b',
      'C',
      'd',
      'E',
      'f',
    ])
  })

  it('case insensitive pre-sorted array', () => {
    expect([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f',
    ].sort(natsort({ insensitive: false }))).toEqual([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f',
    ])
  })

  it('case insensitive un-sorted array', () => {
    expect([
      'A',
      'b',
      'C',
      'd',
      'E',
      'f',
    ].sort(natsort({ insensitive: false }))).toEqual([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f',
    ])
  })
})
