// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// ================================================
function solution(array) {
  // REMOVE DUPLICATES
  //Array.from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3] new Set
  console.log(array);

  //GET ALL POSITIVES
  const isPositive = (n) => n > 0;
  const allPositives = array.filter(isPositive);
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

  return console.log("newMin thats not in the list ", theNumber);
}

solution([5, 2, 4, 3, 6, 6, 7, -1, 13, -4, 9, 22]);
