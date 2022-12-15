let count = 11;

function searchPrimeNumber(count) {
  let message = ''
  if (count < 1000 && count > 1) {
    message = "Простое число";
    for (let i = 2; i < count; i++) {
      if (count % i === 0) {
        message = "Составное число";
        break;
      }
    }
  } else {
    message = "Данные не верны"
  }
  return message;
}
console.log(searchPrimeNumber(count));
