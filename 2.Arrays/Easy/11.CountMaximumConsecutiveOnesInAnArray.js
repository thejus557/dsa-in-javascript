function countMaximumConsecutiveOnesInArray(arr) {
  let maxConsecutiveOnes = 0;
  let currentConsecutiveOnes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentConsecutiveOnes++;
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentConsecutiveOnes);
    } else {
      currentConsecutiveOnes = 0;
    }
  }

  return maxConsecutiveOnes;
}

console.log(
  countMaximumConsecutiveOnesInArray([1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1])
);
