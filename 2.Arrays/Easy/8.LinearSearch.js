function linearSearch(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      console.log("element found at", i);
    }
  }
}

linearSearch([1, 2, 3, 4, 5], 5);
