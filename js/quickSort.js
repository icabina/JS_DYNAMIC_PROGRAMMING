// Which sorting algorithm has the best asymptotic runtime complexity?
//======================================================================
// QUICK SORT
// Ω(n log(n))
// Θ(n^2)

function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
//pure function dont mutate parameters
function quickSort(arr) {
  //RECURSION
  //define pivot
  //build 2 subarrays,
  //make edge cases

  let array = arr.slice(); //shallow copy

  //EDGE CASE
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot]; //no right array
  } else {
    return [pivot, ...quickSort(rightArr)]; //no left array
  }
  // swap(array, i, j);
  //[array[j], array[j-1]] = [array[j-1], array[j]]
}

console.log(quickSort([64, 34, 25, 12, 657, 987, 23, 444, 9, 22, 11, 90]));

//======================================================================
