"use strict";

const miniMaxSum = (arr) => {
  let cantidad = arr.length;

  let suma = (total, item) => total + item;
  let lesserArr = [];
  let lesserRed;
  let greaterArr = [];
  let greaterRed;

  const container = new Set(arr); //removes duplicates

  for (let n of arr) {
    if (1 > n || n > 1000000000) return console.log("out range numbers");
  }

  let removeMinAndSumGreater = (arr) => {
    if (container.size === 1) {
      let valor = [...container][0] - 1;
      greaterRed = valor * cantidad;
      return greaterRed; //devuelve unico numero multiplicado por cantidad
    } else {
      let minimo = Math.min(...arr);
      greaterArr = arr.filter((n) => n !== minimo);
      greaterRed = greaterArr.reduce(suma, 0);
      return greaterRed; //devuelve array reduced
    }
  };
  let removeMaxAndSumLesser = (arr) => {
    if (container.size === 1) {
      let valor = [...container][0] - 1;
      lesserRed = valor * cantidad;
      return lesserRed; //devuelve unico numero multiplicado por cantidad
    } else {
      let maximo = Math.max(...arr);
      lesserArr = arr.filter((n) => n !== maximo);
      lesserRed = lesserArr.reduce(suma, 0);
      return lesserRed; //devuelve array reduced
    }
  };

  console.log(removeMaxAndSumLesser(arr), removeMinAndSumGreater(arr));

  return;
};
//TEST =================================================
console.log("============================================ ");
miniMaxSum([1, 2, 3, 4, 5]); //10 14
console.log("============================================ ");
miniMaxSum([5, 5, 5, 5, 5]); //20 20
console.log("============================================ ");
miniMaxSum([5, 5, 5, 5, 1000000001]); // out of range
