function moveAllZerosToEnd(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

console.log(moveAllZerosToEnd([1, 0, 0, 2, 4, 0, 0, 0, 5, 6, 7, 8]));
