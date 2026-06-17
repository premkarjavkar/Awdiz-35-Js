var a = 12;
var b = 18;
var c = 25;


console.log( a < b && b < c)
console.log( a > b || b < c)
console.log( a > c || b > c)

demoFunction();
function demoFunction() {
  console.log("Inside Function Declaration");
}
demoFunction();


const demoExpression = function () {
  console.log("Inside Function Expression");
};
demoExpression();

const demoArrow = () => {
  console.log("Inside Arrow Function");
};

demoArrow();


function addition(x, y, z, w) {
  let result = x + y + z + w;
  console.log("Addition Result =", result);
}

addition(10, 20, 30, 40);

const subtraction = function (x, y) {
  let result = x - y;
  console.log("Subtraction Result =", result);
};

subtraction(50, 15);

const multiplication = (x, y, z) => {
  let result = x * y * z;
  console.log("Multiplication Result =", result);
};

multiplication(2, 3, 4);

function greet(msg) {
  console.log("Inside greet function");
  return "Returned Message: " + msg;
}

let output1 = greet("Hello JavaScript");
console.log("Output1 =", output1);

const greetArrow = () => {
  console.log("Inside Arrow greet");
  return "Hello from Arrow";
};

let output2 = greetArrow();
console.log("Output2 =", output2);