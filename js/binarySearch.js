// Which sorting algorithm has the best asymptotic runtime complexity?
//======================================================================
// MERGE SORT
// Ω(n log(n)) smaller than Ω(n^2)
const binarySearch = (arr, value) => {
  const array = arr.sort((a, b) => a - b);
  console.log(array);
  //need to sort in right order first
  //cut array in half and look first one side then other side
  let lower = 0;
  let upper = array.length - 1;

  while (lower <= upper) {
    console.log("try");
    //middle index
    const middle = lower + Math.floor((upper - lower) / 2);
    if (value === arr[middle]) {
      return arr[middle]; //theOne si in the index array[middle]
    }

    if (value < array[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
};

console.log(
  binarySearch([64, 34, 25, 12, 657, 987, 23, 444, 9, 22, 11, 90], 22)
);

//======================================================================
