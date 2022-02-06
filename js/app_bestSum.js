const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shorestCombination = null;

  for (let num of numbers) {
    //in instead of of returns indices
    const remainder = targetSum - num;
    //RECURSIVE OF MINUS ABOVE
    const number = bestSum(remainder, numbers, memo); //returns single remainder of remainder - num

    //NOW CREATE COMBINATION AND LOOK FOR SHOREST

    if (number !== null) {
      const combination = [...number, num];
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

  //time: O(n^m * m)
  //space: O(m^2)
};
console.log("============================================="); // 7
console.log("bestSum", bestSum(7, [5, 3, 4, 7])); // 7
console.log("bestSum", bestSum(8, [2, 3, 5])); // [4,4]
console.log("bestSum", bestSum(100, [1, 2, 14, 5, 25])); // [25,25,25,25]
