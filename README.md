# next-promise-series
> Run Promise in series.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-promise-series
```

## usage
```js
import '@jswork/next-promise-series';

var sleep = (inCallback, inTimeout) => {
  var callback = inCallback || nx.noop;
  var timeout = inTimeout || 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('execute!');
      resolve(callback());
    }, timeout);
  });
};

var p1 = function(value) {
  return sleep(() => {
    return value + 111;
  });
};

var p2 = function(value) {
  return sleep(() => {
    return value + 222;
  });
};

var p3 = function(value) {
  return sleep(() => {
    return value + 333;
  });
};

nx.promiseSeries([p1, p2, p3], 0).then((res) => {
  console.log('result:->', res);
});


// Or you can polyfill mode:
Promise.series = nxPromiseSeries;
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-promise-series/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-promise-series
[version-url]: https://npmjs.org/package/@jswork/next-promise-series

[license-image]: https://img.shields.io/npm/l/@jswork/next-promise-series
[license-url]: https://github.com/afeiship/next-promise-series/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-promise-series
[size-url]: https://github.com/afeiship/next-promise-series/blob/master/dist/next-promise-series.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-promise-series
[download-url]: https://www.npmjs.com/package/@jswork/next-promise-series
