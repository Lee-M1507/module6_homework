let a = 1;
let b = 2;

function addition(a) {
  return function (b) {
   return  a + b;
  }
}

let sum  = addition(a)(b);
console.log(sum);
