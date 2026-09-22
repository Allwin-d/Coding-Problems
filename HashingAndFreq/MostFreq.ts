const MostFreq = (arr: number[]) => {
  const freq: Record<number, number> = {};
  for (let val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }

  console.log("Frequency : ", freq);

  let most = 0;
  for (let key in freq) {
    if (freq[key] > most) {
      most = Number(key);
    }
  }
  return most;
};

const arr = [1, 2, 2, 3, 2, 4, 7, 7, 7, 7, 7, 7]; //answer should be 7 because it occurs 6 times;
const answer = MostFreq(arr);
console.log("Answer : ", answer);

// Time Complexity:
// First loop processes n elements → O(n).
// Second loop processes k unique elements → O(k).
// Since k <= n:
// O(n + k) → O(n).

// Space Complexity:
// freq can contain up to n unique elements → O(n).
// most and maxFreq use constant space → O(1).
// Therefore:
// S.C. = O(n).
