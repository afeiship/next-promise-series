# next-promise-series
> Run Promise in series

## installation
```bash
npm install -S afeiship/next-promise-series --registry=https://registry.npm.taobao.org
```

## usage
```js
import nxPromiseSeries from 'next-promise-series';
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

## todo
- [ ] when reject?

## resources
- https://github.com/egoist/promise.series
