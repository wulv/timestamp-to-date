'use strict';

var _datePadding = require('./date-padding');

var _datePadding2 = _interopRequireDefault(_datePadding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (timestamp, format) {
  var date = new Date(parseInt(timestamp, 10));
  var dateObj = {};
  dateObj.yyyy = date.getFullYear();
  dateObj.MM = (0, _datePadding2.default)(date.getMonth() + 1);
  dateObj.dd = (0, _datePadding2.default)(date.getDate());
  dateObj.HH = (0, _datePadding2.default)(date.getHours());
  dateObj.mm = (0, _datePadding2.default)(date.getMinutes());
  dateObj.ss = (0, _datePadding2.default)(date.getSeconds());
  Object.keys(dateObj).forEach(function (item) {
    format = format.replace(item, dateObj[item]);
  });
  return format;
};