// function expresion
const minimum = function (a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return `${a} is equal with ${b}`
  }
}

console.log(minimum(7, 3));
console.log(minimum(7, 9));
console.log(minimum(3, 3));