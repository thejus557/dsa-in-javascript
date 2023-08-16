/**
 * The insertionSort function sorts an array in ascending order using the insertion sort algorithm.
 * Time Complexity - O(n^2)
 * Space Complexity - O(1)
 * @param arr - The parameter `arr` is an array that needs to be sorted using the insertion sort
 * algorithm.
 * @returns the sorted array.
 */
// This is a function named "insertionSort" that takes an array "arr" as input and sorts it in ascending order using the insertion sort algorithm.

function insertionSort(arr) {
  // The outer loop iterates over the array from the first element (index 0) to the last element.
  for (let i = 0; i < arr.length; i++) {
    // Initialize a variable "j" with the value i.
    let j = i;

    // The while loop runs as long as the element at the current index "j" is smaller than the element at the previous index "j - 1".
    // It keeps moving the element at index "j" backward until it finds the correct position in the sorted part of the array.
    while (j > 0 && arr[j] < arr[j - 1]) {
      // If the element at index "j" is smaller than the element at index "j - 1," swap them using a temporary variable "temp."
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;

      // Move the index "j" one position backward to continue the comparison and potential swapping process.
      j--;
    }
  }

  // Finally, the sorted array is returned.
  return arr;
}

console.log(insertionSort([10, 9, 8, 7, 6]));
