//shorest way to sum target with array numbers

const bestSum = (targetSum, numbers, memo = {}) => {
  // bestSum(7, [5, 3, 4, 7])); // 7
  console.log(targetSum, numbers, memo);
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null; //not possible to generate targetSum

  let shorestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;

    const remainder_new = bestSum(remainder, numbers, memo); //returns single remainder of remainder - num

    //NOW CREATE COMBINATION AND LOOK FOR SHOREST

    //if enter here , then is possible to generate remainder
    //remainder_new  is array of numbers to generate remainder
    if (remainder_new !== null) {
      const combination = [...remainder_new, num];
      // if combination is shorter than the current shorestCombination, update shorestCombination
      if (
        shorestCombination === null ||
        combination.length < shorestCombination.length
      ) {
        shorestCombination = combination;
      }
    }
  }

  memo[targetSum] = shorestCombination;
  return shorestCombination;

  // m = targetSum
  // n = numbers.length
  //BRUTE
  //time: O(n^m * m)
  //space: O(m^2)

  //MEMOIZED
  //time: O(n * m^2)
  //space: O(m^2)
};
console.log("============================================="); // 7
console.log("bestSum", bestSum(7, [5, 3, 4, 7])); // 7
// console.log("bestSum", bestSum(8, [2, 3, 5])); // [5,3]
// console.log("bestSum", bestSum(8, [1, 4, 5])); // [4,4]
// console.log("bestSum", bestSum(100, [1, 2, 14, 5, 25])); // [25,25,25,25]
