const diagonalDifference = (n, arr) => {
  const dim = arr[0].length;
  let first_diag_sum = 0;
  let second_diag_sum = 0;
  let sum = 0;

  for (let i = 0, j = dim - 1; i < dim, j > -1; i++, j--) {
    //j integer from second diagonal
    first_diag_sum += arr[i][i];
    second_diag_sum += arr[i][j];
  }
  sum = first_diag_sum - second_diag_sum;

  if (sum > 0) {
    return sum;
  } else if (sum <= 0) {
    return sum * -1; //the absolute difference
  }
};
//=================================================
console.log(
  diagonalDifference(3, [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
console.log(
  diagonalDifference(3, [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
