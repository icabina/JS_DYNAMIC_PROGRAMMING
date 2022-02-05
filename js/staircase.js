const staircase = (n) => {
  let contador = n;

  for (let i = 0; i < n; i++) {
    let array = [];
    for (let j = 0; j < n; j++) {
      if (j < contador - 1) {
        array.push(" ");
      } else {
        array.push("#");
      }
    }
    console.log(array.join(""));
    contador--;
  }
  return;
};
//=================================================
console.log(staircase(4));
