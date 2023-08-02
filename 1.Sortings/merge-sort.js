/**
 * Time Complexity is O(nlogn)
 * Space Complexity is O(N)
 */
function merge(arr, low, mid, high) {
  let result = [];
  let left = low; // Initialize the left pointer to the start of the left subarray.
  let right = mid + 1; // Initialize the right pointer to the start of the right subarray.

  // Merge the left and right subarrays into the 'result' array in sorted order.
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      // Compare elements from the left and right subarrays.
      result.push(arr[left]); // Add the smaller element to the 'result' array.
      left++; // Move the left pointer to the next element.
    } else {
      result.push(arr[right]); // Add the smaller element to the 'result' array.
      right++; // Move the right pointer to the next element.
    }
  }

  // If there are any remaining elements in the left subarray, add them to 'result'.
  while (left <= mid) {
    result.push(arr[left]);
    left++;
  }

  // If there are any remaining elements in the right subarray, add them to 'result'.
  while (right <= high) {
    result.push(arr[right]);
    right++;
  }

  // Copy the sorted elements from 'result' back to the original 'arr'.
  for (let i = low; i <= high; i++) {
    arr[i] = result[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return arr; // Base case: If the subarray has one or zero elements, it is already sorted.

  let mid = Math.floor((low + high) / 2); // Calculate the middle index of the current subarray.
  mergeSort(arr, low, mid); // Recursively sort the left half of the subarray.
  mergeSort(arr, mid + 1, high); // Recursively sort the right half of the subarray.
  merge(arr, low, mid, high); // Merge the two sorted subarrays.

  return arr; // Return the sorted array.
}

console.log(mergeSort([10, 9, 8, 7, 6, 5], 0, 5)); // Call the mergeSort function with the given array and print the result.
