//count 5, 4, 3, 2, 1....

function countDown(num) {
  console.log(num);
  if (num > 1) {
    countDown(num - 1);
  }
}
// console.log(countDown(5));

//==========================================
//sum array elements without reduce or loops
function sum(elems) {
  console.log(elems);
  if (elems.length === 0) {
    return 0;
  }
  const [head, ...rest] = elems;
  return head + sum(rest); //le va quitando un head cada vez al array y lo va sumando al otro
}

// console.log(sum([1, 2, 3, 4, 5]));

//==========================================
//calculate the power of something,
function calcPower(num, power) {
  if (power == 1) {
    return num;
  } else {
    return num * calcPower(num, power - 1);
  }
}
// console.log(calcPower(4, 4));

//==========================================
//factorial
// 5! === (5 * 4 * 3 * 2 * 1)

function factorial(num) {
  //when are we at the bottom of count down?
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));

//==========================================
//fibonacci
//  0,1,1,2,3,5,8,13,21,34,55

function fibonacci(amount, basic = [0, 1]) {
  //if no basic, then set default value to [0,1]
  if (amount <= 2) {
    return basic;
  } else {
    const [second, last] = basic.slice(-2);
    //get the last 2 of basci with slice -#
    //slice, then array destructure
    //now pass basic, plus last, and second last
    return fibonacci(amount - 1, [...basic, second + last]);
    //last parameter is new basic
  }
}
//calculate this amount of numbers of the serie
// console.log(fibonacci(3));

//==========================================
//Tree of data with nodes

const root = {
  node: "arabica",
  children: [
    { node: "heirloom", children: [] },
    {
      node: "bourbon",
      children: [
        { node: "caturra", children: [] },
        { node: "mokka", children: [] },
      ],
    },
    {
      node: "typica",
      children: [
        { node: "kona", children: [] },
        { node: "java", children: [] },
      ],
    },
  ],
};

function print({ node, children }) {
  //destructure
  console.group(node);
  children.forEach((child) => print(child));
  console.groupEnd(node);
}
print(root);
