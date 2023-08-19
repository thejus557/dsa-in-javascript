/**
 * Rotate an array by d places.
 * [1,2,3,4,5,6,7,8]
 * Time is O(N)
 * Space is O(N)
 */

function rotateAnArray(arr, d) {
  if (!arr.length) {
    return "Empty array";
  }
  if (d === 0) {
    return arr;
  } else {
    let firstArray = arr.slice(0, d);
    let secondArray = arr.slice(firstArray.length, arr.length);
    return secondArray.concat(firstArray);
  }
}

// console.log(rotateAnArray([1, 2, 3, 4, 5, 6, 7, 8], 4));

/**
 * d=4, arr = [1,2,3,4,5,6,7,8]
 * Another optimised solutions is reverse whole arr
 * [1,2,3,4,5,6,7,8] => [8,7,6,5,4,3,2,1]
 * reverse first half up to d places [5,6,7,8,4,3,2,1]
 * reverse second half up to d places [5,6,7,8,1,2,3,4]
 * result is  [5,6,7,8,1,2,3,4]
 * Time is O(N+N+N) = O(3N) = O(k*N) = O(N)
 * Space is O(1)
 */

function rotateByDPlacesOpt(arr, d) {
  arr.reverse();
  reverse(0, d, arr);
  reverse(4, arr.length, arr);
  return arr;
}

console.log(rotateAnArray([1, 2, 3, 4, 5, 6, 7, 8], 4));

function reverse(start, end, arr) {
  for (let i = start; i < end - 1; i++) {
    let temp = arr[i];
    arr[i] = arr[end - 1 - i];
    arr[end - 1 - i] = temp;
  }
  return arr;
}
