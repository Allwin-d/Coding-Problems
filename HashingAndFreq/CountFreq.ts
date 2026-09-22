const CountFreq = (arr: number[]) => {
  const freq: Record<number, number> = {};
  for (let val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }
  return freq;
};

const arr = [1, 2, 2, 3, 1, 2];
const answer = CountFreq(arr);
console.log("Answer : ", answer);

// Time Complexity:
// The loop runs n times because it visits every element.
// Each object lookup/insertion is O(1) on average.
// Therefore, T.C. = O(n).

// Space Complexity:
// The freq object stores the frequency of each unique element.
// In the worst case, all n elements can be unique.
// Therefore, S.C. = O(n).
