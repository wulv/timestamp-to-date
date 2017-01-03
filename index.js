import datePadding from './lib/date-padding'

module.exports = (timestamp,format = 'yyyy-MM-dd HH:mm:ss') => {
  const date = new Date(parseInt(timestamp, 10))
  let dateObj = {}
  dateObj.yyyy = date.getFullYear()
  dateObj.MM = datePadding(date.getMonth() + 1)
  dateObj.dd = datePadding(date.getDate())
  dateObj.HH = datePadding(date.getHours())
  dateObj.mm = datePadding(date.getMinutes())
  dateObj.ss = datePadding(date.getSeconds())
  for (var variable in dateObj) {
  	if (dateObj.hasOwnProperty(variable)) {
  		format.replace(variable, dateObj[variable])
  	}
  }
  return format
}
