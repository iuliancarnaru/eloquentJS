const isEven = number => {
  if (number < 0) {
    return isEven(-number);
  } else if (number === 1) {
    return false;
  } else if (number === 0) {
    return true;
  } else {
    return isEven(number - 2);
  }
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// arrow version

function isEven2(x) {
  return x > 1 ? isEven2(x - 2) : x >= 0 ? !x : isEven2(-x);
}
