(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var MSG_ERR = 'promise.series only accepts an array of functions';
  var NUM = 'number';

  nx.promiseSeries = function(inTasks, inInitial) {
    if (!typeof inTasks.length === NUM) {
      return Promise.reject(new TypeError(MSG_ERR));
    }
    return inTasks.reduce(function(current, next) {
      return current.then(next);
    }, Promise.resolve(inInitial));
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.promiseSeries;
  }
})();
