// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(arr) {
  // REMOVE DUPLICATES

  const array = Array.from(new Set(arr));

  //GET ALL POSITIVES
  const isPositiveAndUnder = (n) => n < 1000000 && n > 0;
  const allPositives = array.filter(isPositiveAndUnder);

  if (allPositives.length === 0) return 1;

  //SLICE IF THERE MORE THAN 1000000
  const sliced = allPositives.slice(0, 999999);

  //RETURN SMALLEST IN ARRAY
  let min = Math.min(...sliced);
  min = min + 1;

  //RECURSIVE
  //adds one to min to check next
  const newMin = (n) => {
    //check if in array
    if (allPositives.includes(n)) {
      n = n + 1;
      return newMin(n); //execute again
    }
    return n; //then return the one
  };

  return console.log("theNumber", newMin(min));
}

//TEST
solution([1, 3, 6, 4, 1, 2, 7, 7]); //5
solution([1, 2, 3]); //4
solution([-1, -3]); //1
solution([1000000]); //1
solution([-9999999, 1000000]);
