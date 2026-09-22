const FindDupEle = (arr: number[]) => {
  let dup = [];

  let freq: Record<number, number> = {};

  for (let val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }

  console.log("Frequency : ", freq);

  for (let key in freq) {
    if (freq[key] > 1) {
      dup.push(Number(key));
    }
  }
  return dup;
};

const arr = [1, 2, 3, 2, 4, 1];
const answer = FindDupEle(arr);
console.log("Answer : ", answer);

// Time Complexity:
// First loop processes n elements → O(n).
// Second loop processes k unique elements → O(k).
// Since k <= n:
// O(n + k) → O(n).

// Space Complexity:
// freq can contain up to n unique elements → O(n).
// dup can contain up to n duplicate elements → O(n).
// O(n) + O(n) → O(n).
//
// Therefore:
// T.C. = O(n)
// S.C. = O(n)
