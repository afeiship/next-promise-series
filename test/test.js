var nx = require('next-js-core2');
require('../src/next-promise-series');

test('nx.promiseSeries should return right value', function(done) {
  const sleep = (inCallback, inTimeout) => {
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
    expect(res).toBe(666);
    done();
  });
});
