import natsort from '../../src'

describe('hex: ', () => {

  it('real hex numbers', () => {
    expect([
      '0xA',
      '0x9',
      '0x9',
      '0x99',
    ].sort(natsort())).toEqual([
      '0x9',
      '0x9',
      '0xA',
      '0x99',
    ])
  })

  it('fake hex numbers', () => {
    expect([
      '0xZZ',
      '0xVVV',
      '0xVEV',
      '0xUU',
    ].sort(natsort())).toEqual([
      '0xUU',
      '0xVEV',
      '0xVVV',
      '0xZZ',
    ])
  })

})
