import natsort from '../../src'

describe('version number strings: ', () => {

  it('close version numbers', () => {
    expect([
      '1.0.2',
      '1.0.1',
      '1.0.0',
      '1.0.9'
    ].sort(natsort())).toEqual([
      '1.0.0',
      '1.0.1',
      '1.0.2',
      '1.0.9'
    ]);
  });

  it('#6', () => {
    expect([
      '1.10.0',
      '1.9.0',
      '1.11.0',
    ].sort(natsort())).toEqual([
      '1.9.0',
      '1.10.0',
      '1.11.0',
    ]);
  });

  it('more version numbers', () => {
    expect([
      '1.1.100',
      '1.1.1',
      '1.1.10',
      '1.1.54'
    ].sort(natsort())).toEqual([
      '1.1.1',
      '1.1.10',
      '1.1.54',
      '1.1.100'
    ]);
  });

  it('multi-digit branch release', () => {
    expect([
      '1.0.03',
      '1.0.003',
      '1.0.002',
      '1.0.0001'
    ].sort(natsort())).toEqual([
      '1.0.0001',
      '1.0.002',
      '1.0.003',
      '1.0.03'
    ]);
  });

  it('string last', () => {
    expect([
      '1.1beta',
      '1.1.2alpha3',
      '1.0.2alpha3',
      '1.0.2alpha1',
      '1.0.1alpha4',
      '2.1.2',
      '2.1.1'
    ].sort(natsort())).toEqual([
      '1.0.1alpha4',
      '1.0.2alpha1',
      '1.0.2alpha3',
      '1.1.2alpha3',
      '1.1beta',
      '2.1.1',
      '2.1.2'
    ]);
  });

  it('string first', () => {
    expect([
      'myRelease-1.1.3',
      'myRelease-1.2.3',
      'myRelease-1.1.4',
      'myRelease-1.1.1',
      'myRelease-1.0.5'
    ].sort(natsort())).toEqual([
      'myRelease-1.0.5',
      'myRelease-1.1.1',
      'myRelease-1.1.3',
      'myRelease-1.1.4',
      'myRelease-1.2.3'
    ]);
  });
});
