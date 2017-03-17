import datePadding from './date-padding';

module.exports = (timestamp, format) => {
  const date = new Date(parseInt(timestamp, 10));
  let dateObj = {};
  dateObj.yyyy = date.getFullYear();
  dateObj.MM = datePadding(date.getMonth() + 1);
  dateObj.dd = datePadding(date.getDate());
  dateObj.HH = datePadding(date.getHours());
  dateObj.mm = datePadding(date.getMinutes());
  dateObj.ss = datePadding(date.getSeconds());
  Object.keys(dateObj).forEach(item => {
    format = format.replace(item, dateObj[item]);
  });
  return format;
};
