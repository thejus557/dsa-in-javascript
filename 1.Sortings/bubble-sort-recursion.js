// Define a function named bubbleSort that takes an array (arr) and an index as parameters.
function bubbleSort(arr, index) {
  // Base case: If the current index is greater than or equal to the array length, return the array as it's already sorted.
  if (arr.length <= index) return arr;

  // Initialize a variable i to keep track of the current iteration.
  let i = 0;

  // Iterate through the array elements using a while loop.
  while (i < arr.length) {
    // Compare the current element (arr[i]) with the next element (arr[i + 1]).
    if (arr[i] > arr[i + 1]) {
      // Swap the elements if the current element is greater than the next element.
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    // Move to the next element.
    i++;
  }

  // Recursive call to bubbleSort with the same array and an incremented index.
  bubbleSort(arr, index + 1);

  // Return the sorted array.
  return arr;
}

// Call the bubbleSort function with an initial array [10, 9, 8, 7, 6] and index 0, then log the result to the console.
console.log(bubbleSort([10, 9, 8, 7, 6], 0));
