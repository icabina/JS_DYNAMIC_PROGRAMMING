//number of way target can be created by concatenating elements from array
//may reuse words from the wordbank

const countConstruct = (target, array, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let total = 0;
  //try to make target closer to empty recursively
  for (let i of array) {
    //i is always a prefix
    if (target.indexOf(i) === 0) {
      //this is a prefix
      //indexOf gives substring inside bigger string
      //boolean
      //if i is a prefix on position 0?
      const number = countConstruct(target.slice(i.length), array, memo); //starting after i.length , suffix string after remove prefix
      total += number;
      //RECURSIVE
    }
  }
  memo[target] = total;
  return total;
};
console.log("=============================================");
console.log(
  "countConstruct",
  countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])
); // 1
console.log(
  "countConstruct",
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0
console.log(
  "countConstruct",
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) //4
);
console.log(
  "countConstruct",
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]) //0
);
