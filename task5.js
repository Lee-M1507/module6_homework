const exponentiation = (x, n) => Math.pow(x, n);
console.log(exponentiation(2, 4));

const exponentiation = (x, n) => {
  let result = x;
  for (let i = 1; i < n; i++) {
    result = result * x;
  }
  return result;
}
console.log(exponentiation(2, 1))
