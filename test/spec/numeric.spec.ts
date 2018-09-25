import natsort from '../../src'

describe('numeric: ', () => {

  it('string vs number', () => {
    expect([
      '10',
      9,
      2,
      '1',
      '4',
    ].sort(natsort())).toEqual([
      '1',
      2,
      '4',
      9,
      '10',
    ])
  })

  it('0 left-padded numbers', () => {
    expect([
      '0001',
      '002',
      '001',
    ].sort(natsort())).toEqual([
      '0001',
      '001',
      '002',
    ])
  })

  it('0 left-padded numbers and regular numbers', () => {
    expect([
      '10.0401',
      10.022,
      10.042,
      '10.021999',
    ].sort(natsort())).toEqual([
      '10.021999',
      10.022,
      '10.0401',
      10.042,
    ])
  })

  it('decimal string vs decimal, same precision', () => {
    expect([
      '10.04',
      10.02,
      10.03,
      '10.01',
    ].sort(natsort())).toEqual([
      '10.01',
      10.02,
      10.03,
      '10.04',
    ])
  })

  it('decimal string vs decimal, different precision', () => {
    expect([
      '10.0401',
      10.022,
      10.042,
      '10.021999',
    ].sort(natsort())).toEqual([
      '10.021999',
      10.022,
      '10.0401',
      10.042,
    ])
  })

  it('float/decimal with \'F\' or \'D\' notation', () => {
    expect([
      '10.04f',
      '10.039F',
      '10.038d',
      '10.037D',
    ].sort(natsort())).toEqual([
      '10.037D',
      '10.038d',
      '10.039F',
      '10.04f',
    ])
  })

  it('not float/decimal notation', () => {
    expect([
      '10.004Z',
      '10.039T',
      '10.038ooo',
      '10.037g',
    ].sort(natsort())).toEqual([
      '10.004Z',
      '10.037g',
      '10.038ooo',
      '10.039T',
    ])
  })

  it('scientific notation', () => {
    expect([
      '1.528535047e5',
      '1.528535047e7',
      '1.528535047e3',
    ].sort(natsort())).toEqual([
      '1.528535047e3',
      '1.528535047e5',
      '1.528535047e7',
    ])
  })

  it('negative numbers as strings', () => {
    expect([
      '-1',
      '-2',
      '4',
      '-3',
      '0',
      '-5',
    ].sort(natsort())).toEqual([
      '-5',
      '-3',
      '-2',
      '-1',
      '0',
      '4',
    ])
  })

  it('negative numbers as strings - mixed input type, string + numeric', () => {
    expect([
      -1,
      '-2',
      4,
      -3,
      '0',
      '-5',
    ].sort(natsort())).toEqual([
      '-5',
      -3,
      '-2',
      -1,
      '0',
      4,
    ])
  })

  it('negative floats - all numeric', () => {
    expect([
      -2.01,
      -2.1,
      4.144,
      4.1,
      -2.001,
      -5,
    ].sort(natsort())).toEqual([
      -5,
      -2.1,
      -2.01,
      -2.001,
      4.1,
      4.144,
    ])
  })

  it('money', () => {
    expect([
      '$10002.00',
      '$10001.02',
      '$10001.01',
    ].sort(natsort())).toEqual([
      '$10001.01',
      '$10001.02',
      '$10002.00',
    ])
  })
})
