// Write a function:
function compareTriplets(a, b) {
  console.log("compareTriplets");

  let counter = 0;
  let score = [];
  score[0] = 0;
  score[1] = 0;

  do {
    if (a[counter] > b[counter]) score[0] = score[0] + 1;
    if (a[counter] < b[counter]) score[1] = score[1] + 1;
    counter++;
  } while (counter <= a.length);
  return score;
}
//TEST
console.log(compareTriplets([17, 28, 30], [99, 16, 8])); //[]]
