var natsort = require('../../index.js');
var expect  = require('chai').expect;


describe('rosetta code natural sort small test set: ', function () {

  it('ignoring leading spaces', function () {
    expect([
      'ignore leading spaces: 2-2',
      ' ignore leading spaces: 2-1',
      '  ignore leading spaces: 2+0',
      '   ignore leading spaces: 2+1'
    ].sort(natsort())).to.eql([
      '  ignore leading spaces: 2+0',
      '   ignore leading spaces: 2+1',
      ' ignore leading spaces: 2-1',
      'ignore leading spaces: 2-2'
    ]);
  });

  it('ignoring multiple adjacent spaces (m.a.s)', function () {
    expect([
      'ignore m.a.s spaces: 2-2',
      'ignore m.a.s  spaces: 2-1',
      'ignore m.a.s   spaces: 2+0',
      'ignore m.a.s    spaces: 2+1'
    ].sort(natsort())).to.eql([
      'ignore m.a.s   spaces: 2+0',
      'ignore m.a.s    spaces: 2+1',
      'ignore m.a.s  spaces: 2-1',
      'ignore m.a.s spaces: 2-2'
    ]);
  });

  it('equivalent whitespace characters', function () {
    expect([
      'Equiv. spaces: 3-3',
      'Equiv.\rspaces: 3-2',
      'Equiv.\x0cspaces: 3-1',
      'Equiv.\x0bspaces: 3+0',
      'Equiv.\nspaces: 3+1',
      'Equiv.\tspaces: 3+2'
    ].sort(natsort())).to.eql([
      'Equiv.\x0bspaces: 3+0',
      'Equiv.\nspaces: 3+1',
      'Equiv.\tspaces: 3+2',
      'Equiv.\x0cspaces: 3-1',
      'Equiv.\rspaces: 3-2',
      'Equiv. spaces: 3-3'
    ]);
  });

  it('case insensitive sort (options.insensitive = true)', function () {
    expect([
      'cASE INDEPENENT: 3-2',
      'caSE INDEPENENT: 3-1',
      'casE INDEPENENT: 3+0',
      'case INDEPENENT: 3+1'
    ].sort(natsort({ insensitive: true }))).to.eql([
      'casE INDEPENENT: 3+0',
      'case INDEPENENT: 3+1',
      'caSE INDEPENENT: 3-1',
      'cASE INDEPENENT: 3-2'
    ]);
  });

  it('numeric fields as number', function () {
    expect([
      'foo100bar99baz0.txt',
      'foo100bar10baz0.txt',
      'foo1000bar99baz10.txt',
      'foo1000bar99baz9.txt'
    ].sort(natsort())).to.eql([
      'foo100bar10baz0.txt',
      'foo100bar99baz0.txt',
      'foo1000bar99baz9.txt',
      'foo1000bar99baz10.txt'
    ]);
  });

  it('title sorts', function () {
    expect([
      'The Wind in the Willows',
      'The 40th step more',
      'The 39 steps',
      'Wanda'
    ].sort(natsort())).to.eql([
      'The 39 steps',
      'The 40th step more',
      'The Wind in the Willows',
      'Wanda'
    ]);
  });

  it('equivalent accented characters (and case) (options.insensitive = true)', function () {
    expect([
      'Equiv. \xfd accents: 2-2',
      'Equiv. \xdd accents: 2-1',
      'Equiv. y accents: 2+0',
      'Equiv. Y accents: 2+1'
    ].sort(natsort({ insensitive: true }))).to.eql([
      'Equiv. y accents: 2+0',
      'Equiv. Y accents: 2+1',
      'Equiv. \xfd accents: 2-2',
      'Equiv. \xdd accents: 2-1'
    ]);
  });

});
