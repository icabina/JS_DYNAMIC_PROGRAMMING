// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
//==============================================
//==============================================
function solution(array) {
  //GET ALL POSITIVES and UNDER 1000000
  const isPositiveAndUnder = (n) => n < 1000000 && n > 0;
  const allPositives = array.filter(isPositiveAndUnder);

  if (allPositives.length === 0) return 1;

  const container = new Set();
  let max = 0;
  let counter = 1;

  for (let n of allPositives) {
    container.add(n);
    if (n > max) max = n; //va colculando el maximo
  }

  //RECURSIVE
  do {
    if (!container.has(counter)) return counter;
    counter++;
  } while (counter <= max);

  return counter;
}

//TEST
console.log(solution([1, 1003, 36, 4, 41, 12, 57, 67])); //5
console.log(solution([1, 2, 3])); //4
console.log(solution([-1, -3])); //1
console.log(solution([1000000])); //1
console.log(solution([-9999999, 1000000])); //1

// REMOVE DUPLICATES

// const array = Array.from(new Set(arr));
//ORDER ASC
// array.sort((a, b) => {
//   return a - b; //asc
// });

//SLICE IF THERE MORE THAN 999999
// const sliced = allPositives.slice(0, 999999);

//RETURN SMALLEST IN ARRAY
// let min = Math.min(...sliced);
// let min = Math.min(...array);
//THEN ADD ONE
// min = min + 1;

//RECURSIVE
//adds one to min to check next
// const newMin = (allPositives) => {

// for (let i = 0; i <= sliced.length; i++) {
//   if (sliced[i] !== i + 1) return i; //execute again
// }

// for (let item of allPositives) {
//   if (item >= 1000000 || item <= 0) return 1;
// }
// CHECK IF IN ARRAY
// if (allPositives.includes(n)) {
//   n = n + 1;
//   return newMin(n); //execute again
// }
// return n; //then return the one
// };

// return newMin(allPositives);
