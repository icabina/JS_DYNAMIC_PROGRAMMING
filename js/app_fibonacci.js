//FIBONACCI
// 1 1 2 3 5 8 13 21 34

//memoization
// js object:
// key is argument
// value is the returned value

const fib = (n, memo = {}) => {
  //if i dont pass a second arg, fib will create a memo empty object
  // { n: returned value }

  //CHECK MEMO FIRST
  // prperty "in" obj.... returns boolean, checking if truthy
  if (n in memo) return memo[n];

  //THEN PROCEED
  if (n <= 2) return 1;
  //return fib(n - 1) + fib(n - 2);

  //store it in MEMO
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  //ALL recursive calls have to access memo, so pass memo
  return memo[n];
};

console.log("fib", fib(6)); //tracing the 6th number in sequence
console.log("fib", fib(7)); //tracing the 7th number in sequence
console.log("fib", fib(8)); //tracing the 8th number in sequence
console.log("fib", fib(60)); //tracing the 8th number in sequence
