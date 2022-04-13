//count 5, 4, 3, 2, 1....

function countDown(num) {
  console.log(num);
  if (num > 1) {
    countDown(num - 1);
  }
}
console.log(countDown(5));
//==========================================
