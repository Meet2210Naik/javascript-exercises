const convertToCelsius = function(temp) {
  let celsisu = (parseFloat(temp) - 32) * 5/9
   return Math.round(celsisu * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (parseFloat(temp) * 9/5) + 32;
    return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
