function checkIfTheArrayIsSorted(arr) {
  let status = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      status = false;
      break;
    }
  }
  return status;
}

console.log(checkIfTheArrayIsSorted([6, 7, 8, 9, 20]));
