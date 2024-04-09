// Exporting a function to format a date into a localized date string
module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString(); // converts to string.
  },
}