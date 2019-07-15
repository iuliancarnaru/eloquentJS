const beanCounting = function(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      count++;
    }
  }

  return `We found: ${count} "B" letters`;
};

console.log(beanCounting("hellBo woBBrld"));

// generalised function

const letterCounting = (string, letter) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++ 
    }
  }

  return `We found: ${count} "${letter}" letters`;
}

console.log(letterCounting("hellBo woBBrld", "l"));