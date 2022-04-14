/*
NON RECURSIVE SOLUTION
 HOW MANY PATHS CAN WE CLIMB A STAIR OF N STEPS
 ONLY TAKE 1 OR 2 STEPS AT A TIME

N = 0 => 1
N = 1 => 1
N = 2 => 2
N = 3 => 3
N = 4 => 5
N = 5 => 7
N = 6 => 9
N = 7 => 11
 */
function stairsRecursive(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n == 0) return 1;
  if (n == 1) return 1;
  if (n == 2) return 2;

  memo[n] = stairsRecursive(n - 1, memo[n]) + stairsRecursive(n - 2, memo[n]);

  return memo[n];
}

console.log("number of paths ", stairsRecursive(7));
// space comlexity 0(n)
// time complexity 0(n)
