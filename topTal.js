function solution(message, K) {
  let partido = Array.from(message);

  let newArray = [];
  let count = 0;
  let ka = K;

  do {
    newArray.push(partido[count]);
    count++;
  } while (count < ka);

  function compare(array, k) {
    if (partido[k] !== " ") {
      newArray.push(partido[k]);
      k = k + 1;
      return compare(array, k);
    } else {
      return newArray;
    }
  }

  compare(newArray, ka);
  return newArray;
}
console.log(solution("Codility We test coders", 14));
//reduce el string a el numero,
//si no termina en vacio sigue agregando para no cortar palabra