const aVeryBigSum = (n, arr) => {
  let array = arr.split(" ");

  function toNums(arr) {
    let newArr = [];
    for (let a of arr) {
      newArr.push(Number(a));
    }
    return newArr;
  }
  let arrayNums = toNums(array);

  const acumular = (total, item) => total + item;
  let arrayNumsRed = arrayNums.reduce(acumular, 0);

  return arrayNumsRed;
};
//TEST =================================================
console.log("============================================ ");
// console.time();
console.log(
  aVeryBigSum("5", "1000000001 1000000002 1000000003 1000000004 1000000005")
);
// console.timeEnd();
