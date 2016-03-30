# natsort

> Javascript Natural Sort Algorithm With Unicode Support.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/natsort/blob/master/LICENSE)

[![tag:?](https://img.shields.io/github/tag/bubkoo/natsort.svg?style=flat-square)](https://github.com/bubkoo/natsort/releases)
[![build:?](https://img.shields.io/travis/bubkoo/natsort/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/natsort)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/natsort/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/natsort)

[![npm:](https://img.shields.io/npm/v/natsort.svg?style=flat-square)](https://www.npmjs.com/packages/natsort)
[![downloads:?](https://img.shields.io/npm/dm/natsort.svg?style=flat-square)](https://www.npmjs.com/packages/natsort)
[![dependencies:?](https://img.shields.io/david/bubkoo/natsort.svg?style=flat-square)](https://david-dm.org/bubkoo/natsort)

## TL;DR

Most sort implementations utilizing a fast sort algorithm but they all lack the ability to perform a "**natural sort**". That is, sorting an array of dates, numeric string, software version numbers, etc. and getting the "natural" a.k.a. "expected" ordering on the results. 

This algorithm was deeply inspired from [this blog post](http://www.overset.com/2008/09/01/javascript-natural-sort-algorithm/) of [Jim Palmer](http://www.linkedin.com/in/jimbob).

The project name "**natsort**" was inspired from PHP's `natsort()` function.

### Features

- Numeric support
- Unicode support
- Dates sorting support
- Empty strings are always come first


## Install

```
$ npm install natsort --save
```

## Usage


