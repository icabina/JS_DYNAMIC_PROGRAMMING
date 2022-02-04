//pass memo as empty object in case no memo is passed below

const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  //are the args in the memo??
  if (key in memo) return memo[key];

  if (m === 1 || n === 1) return 1; //only one way to travel
  if (m === 0 || n === 0) return 0; //no grid, no execution

  //recursive scenario: get the sum of going downwards and righwards
  //m downwards
  //n rightwards

  //return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);

  //pass down memo to all recursive calls
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log("gridTraveler", gridTraveler(1, 1)); // 1 one way to travel in a 1 by 1 grid
console.log("gridTraveler", gridTraveler(2, 3)); // 3
console.log("gridTraveler", gridTraveler(3, 2)); // 3
console.log("gridTraveler", gridTraveler(3, 3)); // 6
console.log("gridTraveler", gridTraveler(18, 18)); // 2333606220
