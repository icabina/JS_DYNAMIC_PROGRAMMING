// Which sorting algorithm has the best asymptotic runtime complexity?
//======================================================================
// BUBBLE SORT
// Ω(n)
// Θ(n^2)

function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

// An optimized version of Bubble Sort
function bubbleSort(arr) {
  var i, j;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

/* Function to print an array */
function printArray(arr, size) {
  var i;
  for (i = 0; i < size; i++) document.write(arr[i] + " ");
  document.write("\n");
}

// Driver program to test above functions
var arr = [64, 34, 25, 12, 22, 11, 90];
var n = 7;
document.write("UnSorted array: \n");
printArray(arr, n);

bubbleSort(arr, n);

document.write("Sorted array: \n");
printArray(arr, n);

//======================================================================
// HEAP SORT
// Ω(n log(n))
// Θ(n log(n))

// INSERTION SORT
// Ω(n)
// Θ(n^2)

// SELECTION SORT
