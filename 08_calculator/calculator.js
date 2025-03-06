const add = function(a , b) {
  return +a + +b;
};

const subtract = function(a, b) {
	return +a - +b;
};

const sum = function(arr) {
  return arr.reduce((all, current) => {
    return all + current;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((all , current) => all * current, 1);
};

const power = function(a , b) {
	return a ** b;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
