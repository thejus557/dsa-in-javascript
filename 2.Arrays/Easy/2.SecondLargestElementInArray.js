function secondLargest(arr) {
  let highest = -1;
  let secondHighest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      secondHighest = highest;
      highest = arr[i];
    } else if (arr[i] > secondHighest) {
      secondHighest = arr[i];
    }
  }
  return secondHighest;
}

console.log(secondLargest([10, 9, 8, 7, 6]));
