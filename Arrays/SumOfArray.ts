const SumOfArray = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

const arr = [1, 2, 3, 4];
const ans = SumOfArray(arr);
console.log("Answer : ", ans);

// Time Complexity:
// The loop visits every element of the array.
// Therefore, it runs n times.
// The addition operation itself is O(1),
// but it is performed n times.
// Therefore, T.C. = O(n).

// Space Complexity:
// We only use a fixed number of variables (sum and i).
// These variables require constant space.
// Therefore, S.C. = O(1).
