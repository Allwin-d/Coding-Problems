const ReverseAnArray = (arr: number[]) => {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
};

const arr = [1, 2, 3, 4, 5];
const answer = ReverseAnArray(arr);
console.log("Answer :", answer);

//Time and Space Comeplexity
//for loop runs o(n) times because it checks on each and every array element , so t/c is => o(n);
//here rev variable is based on the input size array so it requires n number of space so s/c is => o(n);
