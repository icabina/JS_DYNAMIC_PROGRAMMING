//can construct target string with elements of array??

const canConstruct = (target, array, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") {
    return true;
  }

  //try to make target closer to empty recursively
  for (let i of array) {
    //i is always a prefix
    if (target.indexOf(i) === 0) {
      //indexOf gives substring inside bigger string
      //boolean
      //if i is a prefix on position 0?
      const suffix = target.slice(i.length); //starting after i.length , suffix string after remove prefix
      //RECURSIVE
      if (canConstruct(suffix, array, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};
console.log("=============================================");
console.log(
  "canConstruct",
  canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])
); // true
console.log(
  "canConstruct",
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  "canConstruct",
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) //true
);
console.log(
  "canConstruct",
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]) //true
);
