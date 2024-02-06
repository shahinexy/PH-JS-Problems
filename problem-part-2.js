// simple calculator to call function inside a function
function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function calculator(x, y, oparetor) {
  if (oparetor === "add") {
    return add(x, y);
  } else if (oparetor == "substract") {
    return substract(x , y);
  } else if (oparetor == "multiply") {
    return multiply(x , y);
  } else if (oparetor == "divide") {
    return divide(x , y);
  }
}
console.log(calculator(10, 20, "divide"));
console.log(calculator(10, 20, "add"));
console.log(calculator(10, 20, "substract"));
console.log(calculator(10, 20, "multiply"));
