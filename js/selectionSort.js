// Which sorting algorithm has the best asymptotic runtime complexity?
//======================================================================
// SELECTION SORT
// Ω(n^2)
// Θ(n^2)

//pure function dont mutate parameters
function selectionSort(arr) {
  let array = arr.slice(); //shallow copy

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
    //[arr[i], arr[minIndex]] = [arr[minIndex], array[i]]
  }
  return array;
}

// Driver program to test above functions
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));

//======================================================================
// HEAP SORT
// Ω(n log(n))
// Θ(n log(n))

// INSERTION SORT
// Ω(n)
// Θ(n^2)

// SELECTION SORT
