# next-promise-series
> Run Promise in series

## installation
```bash
npm install -S afeiship/next-promise-series --registry=https://registry.npm.taobao.org
```

## usage
```js
import nxPromiseSeries from 'next-promise-series';
nxPromiseSeries([
  promise1,
  promise2,
  promise3
]).then(response=>{

});

// Or you can polyfill mode:
Promise.series = nxPromiseSeries;
```

## resources
- https://github.com/egoist/promise.series
