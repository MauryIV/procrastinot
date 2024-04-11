const TimeManager = require('als-time-manager');
const { timeToMs } = TimeManager

const format_date = (date) => {
  return date.toLocaleDateString();
};

module.exports = { timeToMs, format_date };
