import natsort from '../../src'

describe('filename: ', () => {

  it('simple image filename', () => {
    expect([
      'img1.png',
      'img12.png',
      'img10.png',
      'img2.png',
      'img1.png',
    ].sort(natsort())).toEqual([
      'img1.png',
      'img1.png',
      'img2.png',
      'img10.png',
      'img12.png',
    ])
  })

  it('complex filename', () => {
    expect([
      'car.mov',
      '01alpha.sgi',
      '001alpha.sgi',
      'my.string_41299.tif',
      'organic2.0001.sgi',
    ].sort(natsort())).toEqual([
      '001alpha.sgi',
      '01alpha.sgi',
      'car.mov',
      'my.string_41299.tif',
      'organic2.0001.sgi',
    ])
  })

  it('unix filename', () => {
    expect([
      './system/kernel/js/01_ui.core.js',
      './system/kernel/js/00_jquery-1.3.2.js',
      './system/kernel/js/02_my.desktop.js',
    ].sort(natsort())).toEqual([
      './system/kernel/js/00_jquery-1.3.2.js',
      './system/kernel/js/01_ui.core.js',
      './system/kernel/js/02_my.desktop.js',
    ])
  })
})
