import natsort from '../../src'

describe('handle of space: ', () => {

  it('space(s) as first character(s)', () => {
    expect([
      'alpha',
      ' 1',
      '  3',
      ' 2',
      0,
    ].sort(natsort())).toEqual([
      0,
      ' 1',
      ' 2',
      '  3',
      'alpha',
    ])
  })

  it('empty strings and space character', () => {
    expect([
      '10023',
      '999',
      '',
      2,
      5.663,
      5.6629,
    ].sort(natsort())).toEqual([
      '',
      2,
      5.6629,
      5.663,
      '999',
      '10023',
    ])

    expect([
      0,
      '0',
      '',
      '',
    ].sort(natsort())).toEqual([
      '',
      '',
      0,
      '0',
    ])
  })

})
