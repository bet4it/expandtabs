# expandtabs [![Build Status](https://travis-ci.org/bet4it/expandtabs.svg?branch=master)](https://travis-ci.org/bet4it/expandtabs) [![XO: Linted](https://img.shields.io/badge/xo-linted-blue.svg)](https://github.com/xojs/xo)

> Javascript version of expandtabs

Return a copy where all tab characters are expanded using spaces.

This code bases on an article in [Chris West's Blog](http://cwestblog.com/) : [JavaScript – String.prototype.expandTabs() Revisited](http://cwestblog.com/2012/01/23/javascript-string-prototype-expandtabs-revisited/).

Support fullwidth characters and ANSI escape codes.


## Install

```
$ npm install expandtabs
```

## Usage

```js
const expandTabs = require('expandtabs');

expandTabs('aaa\tbbb');
//=> aaa        bbb
```

## API

### expandTabs(string, tabSize?)

#### string

Type: `string`

String need to be expanded.

#### tabSize

Type: `number`<br>
Default: `8`

Size of a tab.
