const CountEvenNum = (arr: number[]) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count += 1;
    }
  }
  return count;
};

const arr = [1, 2, 4, 7, 8]; // ans -> 3
const answer = CountEvenNum(arr);
console.log("Answer : ", answer);

// Time Complexity:
// The loop checks every element in the array once.
// Therefore, T.C. = O(n).

// Space Complexity:
// We use a fixed number of variables (count and i).
// Therefore, the auxiliary space is constant.
// S.C. = O(1).
