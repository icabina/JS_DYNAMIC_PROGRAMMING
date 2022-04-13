// Which sorting algorithm has the best asymptotic runtime complexity?
//======================================================================
// MERGE SORT
// Ω(n log(n)) smaller than Ω(n^2)
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];
    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};
// console.log("merge", merge([3, 6], [8, 19]));

//pure function dont mutate parameters
function mergeSort(arr) {
  let array = arr.slice(); //shallow copy
  //Recursive
  //divides
  // EDGE CASE
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex); //gives till end

  return merge(mergeSort(leftArr), mergeSort(rightArr));
  //[array[j], array[j-1]] = [array[j-1], array[j]]
}

console.log(mergeSort([64, 34, 25, 12, 657, 987, 23, 444, 9, 22, 11, 90]));

//======================================================================
