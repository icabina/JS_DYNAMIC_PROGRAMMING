function solution(arr) {
  // REMOVE DUPLICATES
  const array = Array.from(new Set(arr)); // => [1, 2, 3] new Set

  //GET ALL POSITIVES
  const isPositive = (n) => n > 0;
  const allPositives = array.filter(isPositive);

  if (allPositives.length === 0) {
    return 1;
  }
  // ================================================

  //RETURN SMALLEST IN ARRAY
  let min = Math.min(...allPositives);
  min = min + 1;

  // ================================================
  let number = 0;
  //RECURSIVE
  //adds one to min to check next
  const newMin = (n) => {
    //check if in array
    if (!allPositives.includes(n)) {
      return n;
    } else {
      //else is not in array, so its the one
      number = n + 1;
      newMin(number);
    }
    return number;
  };
  const theNumber = newMin(min);
  // ================================================

  //return console.log("theNumber", theNumber);
  return theNumber;
}
//===============================================
//TEST
solution([1, 3, 6, 4, 1, 2, 7, 7]); //5
solution([1, 2, 3]); //4
solution([-1, -3]); //1
