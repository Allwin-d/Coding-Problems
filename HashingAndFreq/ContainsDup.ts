const ContainsDup = (arr: number[]) => {
  let freq: Record<number, number> = {};

  for (let val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }

  console.log("Frequency : ", freq);

  for (let key in freq) {
    if (freq[key] > 1) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4];
const answer = ContainsDup(arr);
console.log("Answer : ", answer);

// Time Complexity:
// First loop processes n elements → O(n).
// Second loop processes k unique elements → O(k).
// Since k <= n:
// O(n + k) → O(n).
//
// Therefore, T.C. = O(n).

// Space Complexity:
// freq can contain up to n unique elements
// in the worst case.
// Therefore, S.C. = O(n).