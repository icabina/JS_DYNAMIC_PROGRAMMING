const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      //   return [...remainderResult, num];
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null; //not possible
};

console.log("howSum", howSum(7, [2, 3]));
console.log("howSum", howSum(7, [5, 3, 4, 1, 7]));
console.log("howSum", howSum(7, [2, 4]));
console.log("howSum", howSum(8, [2, 3, 5]));
console.log("howSum", howSum(300, [7, 14]));
