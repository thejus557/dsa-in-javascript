function largestElementInArray(arr) {
  let highest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  return highest;
}

console.log(largestElementInArray([10, 9, 8, 7, 6]));
