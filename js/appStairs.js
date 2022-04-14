/*
NON RECURSIVE SOLUTION
 HOW MANY PATHS CAN WE CLIMB A STAIR OF N STEPS
 ONLY TAKE 1 OR 2 STEPS AT A TIME

 N = 0 => 1
 N = 1 => 1
 N = 2 => 2
 

 */
const stairs = (n) => {
  const memo = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

console.log("stairs", stairs(7));

// space comlexity 0(n)
// time complexity 0(n)
