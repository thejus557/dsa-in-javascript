function removeDuplicatedFromSortedArray(arr) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr.slice(0, j + 1);
}

console.log(removeDuplicatedFromSortedArray([5, 5, 6, 7, 7, 7, 8, 9]));
