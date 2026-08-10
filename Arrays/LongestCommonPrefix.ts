var longestCommonPrefix = function (strs: string[]) {
  const sortedArr = strs.sort();
  console.log("Sorted Array : ", sortedArr);
  const firstWord = sortedArr[0];
  const lastWord = sortedArr[sortedArr.length - 1];
  let result = "";

  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] === lastWord[i]) {
      result = result + firstWord.charAt(i);
    } else {
      return result;
    }
  }
  return result;
};

const strs = ["flower", "flow", "flight"];
const answer = longestCommonPrefix(strs);
console.log("Answer : ", answer);
