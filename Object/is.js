
var Kernel = require("../kernel.js");

Object.is = function is (value1, value2) {
  if (value1 === value2)
    return value1 !== 0 || 1/value1 === 1/value2;
  return value1 !== value1 && value1 !== value2;
};
