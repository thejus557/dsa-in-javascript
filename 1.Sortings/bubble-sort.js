/**
 * The bubbleSort function sorts an array in ascending order using the bubble sort algorithm.
 * Time Complexity = O(n^2)
 * Space Complexity = O(1)
 * @param arr - The parameter `arr` is an array that needs to be sorted using the bubble sort
 * algorithm.
 * @returns the sorted array.
 */
function bubbleSort(arr) {
  // The outer loop iterates over the array from the first element (index 0) to the second-to-last element (index arr.length - 2).
  for (let i = 0; i < arr.length - 1; i++) {
    // The inner loop iterates over the array from the first element (index 0) to the last element (index arr.length - 1).
    for (let j = 0; j < arr.length; j++) {
      // Check if the current element (arr[j]) is greater than the next element (arr[j + 1]).
      if (arr[j] > arr[j + 1]) {
        // If the current element is greater than the next element, swap them using a temporary variable "temp."
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  // Finally, the sorted array is returned.
  return arr;
}

console.log(bubbleSort([10, 9, 8, 7, 6]));
