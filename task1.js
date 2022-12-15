let arr = [1, 4, 3, 7, 0, 'Иван'];

function countNumberTypes(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let notNumberCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      if (arr[i] === 0) {
        zeroCount++;
        continue;
      }
      if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    } else {
      notNumberCount++;
    }
  }
  console.log(`четных - ${evenCount}`);
  console.log(`не четных - ${oddCount}`);
  console.log(`нолей - ${zeroCount}`);
  console.log(`не чисел - ${notNumberCount}`);
}

countNumberTypes(arr);
