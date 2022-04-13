/* function should return a 2D array containing all of the ways that the target can be constructer by concatenating elements of the array */
//reuse items

const allConstruct = (target, array, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]]; // empty 2D in base case, can construct by taking no words
  const result = [];

  for (let word of array) {
    if (target.indexOf(word) === 0) {
      // si word es prefijo en target, siga y corte target
      const suffix = target.slice(word.length); //remanider of the string till the end
      const suffixWays = allConstruct(suffix, array, memo); //array of all the ways to build suffix
      const targetWays = suffixWays.map((way) => [word, ...way]); //adding word for every subarray
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};
console.log("=============================================");
console.log(
  "allConstruct",
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])
); // 1
console.log(
  "allConstruct",
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0
console.log(
  "allConstruct",
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) //4
);
/* console.log(
  "allConstruct",
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]) //0
); */
