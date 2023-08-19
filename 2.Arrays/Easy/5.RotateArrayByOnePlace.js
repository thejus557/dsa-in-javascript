function rotateArrayByOnePlace(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[0];
    arr[0] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

console.log(rotateArrayByOnePlace([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
