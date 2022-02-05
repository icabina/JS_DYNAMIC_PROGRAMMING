const canSum = (targetSum, numbers, memo = {}) => {
  //==============================
  if (targetSum in memo) return memo[targetSum];
  //==============================
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    //console.log(num);
    const remainder = targetSum - num;
    //call recursevly canSum
    //canSum(remainder, numbers); //returns boolean
    if (canSum(remainder, numbers, memo) === true) {
      //=====================
      memo[targetSum] = true;
      //=====================
      return true; //for totally
    }
  }

  //otherwise
  memo[targetSum] = false;
  return false; //no se puede sumar exactamente del array a canSum
};
console.log("canSum", canSum(7, [2, 3])); //true
console.log("canSum", canSum(7, [5, 3, 4, 7])); //true
console.log("canSum", canSum(7, [2, 4])); //true
console.log("canSum", canSum(8, [2, 3, 5])); //true
console.log("canSum", canSum(300, [7, 14])); //false
