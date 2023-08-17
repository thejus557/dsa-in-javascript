// This function implements the QuickSort algorithm to sort an array in-place.
// It takes the array 'arr', the lower bound index 'low', and the upper bound index 'high'.
function quickSort(arr, low, high) {
  // Base case: if the low index is greater than or equal to the high index, the array is already sorted.
  if (low >= high) return;

  // Find the partition index that divides the array into two parts.
  let partitionIndex = findPivotIndex(arr, low, high);

  // Recursively sort the left and right subarrays.
  quickSort(arr, low, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, high);

  // The array is now sorted, return it.
  return arr;
}

// This function finds the correct position (pivot index) of the pivot element in the array.
// It takes the array 'arr', the lower bound index 'low', and the upper bound index 'high'.
function findPivotIndex(arr, low, high) {
  // Choose the pivot element as the element at the 'low' index.
  let pivot = arr[low];
  let i = low;
  let j = high;

  // Partition the array such that elements smaller than the pivot are on the left
  // and elements greater than the pivot are on the right.
  while (i <= j) {
    while (arr[i] <= pivot && i <= j) i++; // Find element greater than pivot from the left
    while (arr[j] >= pivot && j >= i) j--; // Find element smaller than pivot from the right
    if (i < j) {
      // Swap elements at indices i and j if they are out of place.
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Move the pivot element to its correct position in the array.
  arr[low] = arr[j];
  arr[j] = pivot;

  // Return the pivot index.
  return j;
}

let arr = [10, 9, 8, 7, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // Output the sorted array.

// Time Complexity:
// The average and best-case time complexity of QuickSort is O(n log n),
// where n is the number of elements in the array. However, in the worst case,
// the time complexity can degrade to O(n^2), which happens when the pivot
// is consistently chosen as the smallest or largest element, leading to
// imbalanced partitions.

// Space Complexity:
// The space complexity of QuickSort is O(log n) for the recursive call stack.
// This is because the maximum number of recursive calls is equal to the number
// of levels in the recursion tree, which is log n for an array of size n.
// The partitioning process uses only a constant amount of extra space,
// so it doesn't significantly impact the space complexity.
