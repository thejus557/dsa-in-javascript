/**
 * Brute Force
 * This function finds the length of the longest subarray within a given array
 *  that has a specified sum, considering only positive numbers.
 */

function longestSubArrayWithGivenSumKPositivesBrute(arr, sum) {
  // Initialize a variable to store the maximum length of the subarray
  let maxLength = 0;

  // Iterate through each starting point of the subarray
  for (let i = 0; i < arr.length; i++) {
    // Initialize a variable to keep track of the current sum
    let currSum = 0;

    // Iterate through the elements from the current starting point
    for (let j = i; j < arr.length; j++) {
      // Add the current element to the current sum
      currSum = currSum + arr[j];

      // Check if the current sum matches the desired sum
      if (currSum === sum) {
        // Update the maxLength if the current subarray is longer
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  // Return the maximum length found
  return maxLength;
}

// Test the function with an example array and desired sum
console.log(longestSubArrayWithGivenSumKPositivesBrute([2, 3, 5], 5));

/**
 * Better Approach
 * This function calculates the length of the longest subarray within the given 'arr'
 * that has a sum equal to the provided 'sum', and all elements in the subarray are positive.

 */
function longestSubArrayWithGivenSumKPositives(arr, sum) {
  let len = 0; // Initialize the length of the longest subarray to 0
  let totalSum = 0; // Initialize the running total sum to 0
  let hash = {}; // Create an empty object to store the running total sums and their indices

  // Iterate through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i]; // Add the current element to the running total sum
    hash[totalSum] = i; // Store the index of the current total sum in the hash object

    // Check if the current total sum is equal to the target sum
    if (totalSum === sum) {
      len = i; // Update the length of the longest subarray (up to the current index)
    }

    // Check if there's a previous total sum that, when subtracted from the current index 'i',
    // gives the target sum. If such a sum exists in the hash object, update the length.
    if (hash[totalSum - sum]) {
      len = Math.max(hash[totalSum - sum], len); // Update the length to include the current subarray
    }
  }

  return len + 1; // Return the length of the longest subarray with 1 added to include the current element
}

let arr = [2, 3, 5]; // Example input array
let sum = 5; // Example target sum
console.log(longestSubArrayWithGivenSumKPositives(arr, sum)); // Display the result of the function
