function findTheMissingNumber(arr) {
  const sum = arr.reduce((prev, next) => prev + next, 0);
  const total = ((arr.length + 1) * (arr.length + 1 + 1)) / 2;

  return total - sum;
}

console.log(findTheMissingNumber([1, 2, 3, 5, 6]));
