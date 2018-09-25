import natsort from '../../src'

describe('desc support: ', () => {

  it('desc pre-sorted array', () => {
    expect([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f',
    ].sort(natsort({ desc: true }))).toEqual([
      'f',
      'd',
      'b',
      'E',
      'C',
      'A',
    ])
  })

  it('desc un-sorted array', () => {
    expect([
      'A',
      'C',
      'E',
      'b',
      'd',
      'f',
    ].sort(natsort({ desc: true }))).toEqual([
      'f',
      'd',
      'b',
      'E',
      'C',
      'A',
    ])
  })

  it('asc pre-sorted array', () => {
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

  it('asc un-sorted array', () => {
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
