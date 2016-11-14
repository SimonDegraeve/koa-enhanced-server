# koa-enhanced-server
> Koa server with graceful shutdown

[![NPM Version][npm-img]][npm-link]
[![Licence][licence-img]][licence-link]
[![Build Status][travis-img]][travis-link]
[![Coverage Status][codecov-img]][codecov-link]
[![Dependency Status][gemnasium-img]][gemnasium-link]


## Install

```
$ npm install --save koa-enhanced-server
```


## Usage

```js
import Application from 'koa';
import createServer from 'koa-enhanced-server';

const app = new Application();
app.onExit = () => Promise.resolve();

const server = createServer(app);
const httpsServer = createServer(app, { 
  https: true,
  // ...TLS options
})

server.listen();
```


[npm-img]: https://img.shields.io/npm/v/koa-enhanced-server.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/koa-enhanced-server

[licence-img]: https://img.shields.io/npm/l/koa-enhanced-server.svg?style=flat-square
[licence-link]: LICENCE.md

[travis-img]: https://img.shields.io/travis/SimonDegraeve/koa-enhanced-server.svg?style=flat-square
[travis-link]: https://travis-ci.org/SimonDegraeve/koa-enhanced-server

[codecov-img]: https://img.shields.io/codecov/c/github/SimonDegraeve/koa-enhanced-server/master.svg?style=flat-square
[codecov-link]: https://codecov.io/github/SimonDegraeve/koa-enhanced-server?branch=master

[gemnasium-img]: https://img.shields.io/gemnasium/SimonDegraeve/koa-enhanced-server.svg?style=flat-square
[gemnasium-link]: https://gemnasium.com/github.com/SimonDegraeve/koa-enhanced-server
