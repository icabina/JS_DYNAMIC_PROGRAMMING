const plusMinus = (arr) => {
  const n = arr.length;

  const positivos = arr.filter((n) => n > 0);
  const postivosLength = positivos.length;
  const postivosRatio = postivosLength / n;
  console.log(postivosRatio);

  const negativos = arr.filter((n) => n < 0);
  const negativosLength = negativos.length;
  const negativosRatio = negativosLength / n;
  console.log(negativosRatio);

  const zeros = arr.filter((n) => n === 0);
  const zerosLength = zeros.length;
  const zerosRatio = zerosLength / n;
  console.log(zerosRatio);

  return;
};
//=================================================
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
