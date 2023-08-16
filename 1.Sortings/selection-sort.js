/**
 * The selectionSort function sorts an array in ascending order using the selection sort algorithm.
 * Time Complexity - O(n^2)
 * Space Complexity - O(1)
 * @param arr - The parameter `arr` is an array that needs to be sorted using the selection sort
 * algorithm.
 * @returns the sorted array.
 */
function selectionSort(arr) {
  // The outer loop iterates over the array from the first element (index 0) to the last element.
  for (let i = 0; i < arr.length; i++) {
    // We assume the current index (i) has the minimum value.
    let minIndex = i;

    // The inner loop starts from the next element (index i+1) and goes until the last element (index arr.length - 1).
    for (j = i + 1; j < arr.length; j++) {
      // Check if the element at the current minimum index is greater than the element at the current inner loop index (j).
      if (arr[minIndex] > arr[j]) {
        // If the element at index j is smaller than the current minimum element, update the minIndex to j.
        minIndex = j;
      }
    }

    // After finding the minimum element in the unsorted portion of the array, swap it with the element at index i.
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  // Finally, the sorted array is returned.
  return arr;
}

console.log(selectionSort([10, 9, 8, 7, 6, 5]));
