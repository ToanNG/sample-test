module.exports = function () {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (previousValue, currentValue) {
    return previousValue * currentValue;
  });
}
