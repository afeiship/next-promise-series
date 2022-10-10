(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var MSG_ERR = 'promise.series only accepts an array of functions';
  var NUM = 'number';

  nx.promiseSeries = function (inTasks, inInitial) {
    if (!typeof inTasks.length === NUM) {
      return Promise.reject(new TypeError(MSG_ERR));
    }
    return inTasks.reduce(function (res, next) {
      return res.then(next);
    }, Promise.resolve(inInitial));
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.promiseSeries;
  }
})();
