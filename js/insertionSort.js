// Which sorting algorithm has the best asymptotic runtime complexity?
//======================================================================
// INSERTION SORT
// Ω(n^2)
// Θ(n^2)

//pure function dont mutate parameters
function insertionSort(arr) {
  let array = arr.slice(); //shallow copy

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        var temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        //[array[j], array[j-1]] = [array[j-1], array[j]]
      } else {
        break;
      }
    }
  }
  return array;
}

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));

//======================================================================
// HEAP SORT
// Ω(n log(n))
// Θ(n log(n))

// INSERTION SORT
// Ω(n)
// Θ(n^2)

// SELECTION SORT
