const add = function(a,b) {
	
  return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(myarray) {
  let sum = 0;
	for(let i = 0; i < myarray.length;i++){
    sum += myarray[i];
  }

    return sum;
};

const multiply = function(myarray) {
  let product = myarray[0];
  for(let i = 1 ;i < myarray.length ;i++){
    product *= myarray[i];
  }

    return product;
};

const power = function(a,b) {
  let power = 1;
  for(let i = 1 ; i <= b ; i++)
    {
      power *= a;
    }

    return power;
};

const factorial = function(a) {
  let fac = 1;
  if(a === 0 || a === 1)
    return 1;

 
  for (let i = 2; i <= a; i++) {
    fac *= i;
  }
  return fac;
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
