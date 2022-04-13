//======================================================================
// HEAP SORT
// Ω(n log(n))
// Θ(n log(n))

// JavaScript program for implementation
// of Heap Sort
//====================================================
function heapSort(arr) {
  var n = arr.length;

  // Math.ceil(5.5) // Answer 6, rounds up.
  // Math.round(5.5) // Answer 6, rounds to the closest whole number.
  // Math.floor(5.5) // Answer 5, rounds down.

  //[5, 12, 11, 13, 4, 6, 7];
  // Build heap (rearrange array)

  for (var i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

  // console.log(arr); // [13, 12, 11, 5, 4, 6, 7]
  // One by one extract an element from heap
  for (var i = n - 1; i > 0; i--) {
    // Move current root to end
    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}
//====================================================
// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i) {
  // console.log(arr);
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // [ 12, 5, 14, 13, 4, 6, 7];
  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) largest = r;

  // console.log(arr);
  // If largest is not root
  if (largest != i) {
    var swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
  // console.log(arr);
}
// heapify([5, 12, 11, 13, 4, 6, 7], 7, 0);

//====================================================
/* A utility function to print array of size n */
// function printArray(arr) {
//   var n = arr.length;
//   for (var i = 0; i < n; ++i) document.write(arr[i] + " ");
// }
//====================================================
console.log(heapSort([5, 12, 66, 7, 1, 90, 1110, 11, 13, 4, 6, 7]));
// var n = arr.length;

// sort(arr);

// document.write("Sorted array is <br>");
// printArray(arr, n);
// Sorted array is
// 5 6 7 11 12 13

// This code is contributed by SoumikMondal

// INSERTION SORT
// Ω(n)
// Θ(n^2)

// SELECTION SORT
