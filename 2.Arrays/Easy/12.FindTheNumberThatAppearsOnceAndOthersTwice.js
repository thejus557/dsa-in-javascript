function findTheNumberThatAppearsOnceAndOthersTwice(arr) {
  const obj = {};

  arr.forEach((ele) => {
    if (obj[ele]) {
      obj[ele] = obj[ele] + 1;
    } else {
      obj[ele] = 1;
    }
  });

  let appearedOnce = Object.keys(obj).find((ele) => obj[ele] === 1);
  return appearedOnce;
}

console.log(findTheNumberThatAppearsOnceAndOthersTwice([4, 1, 2, 1, 2]));
