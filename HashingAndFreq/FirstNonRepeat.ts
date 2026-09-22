const FirstNonRepeat = (arr: number[]) => {
  let map = new Map<number, number>();

  for (let val of arr) {
    map.set(val, (map.get(val) || 0) + 1);
  }

  console.log("Frequency : ", map);

  for (let [key] of map) {
    if (map.get(key) === 1) {
      return key;
    }
  }
};

const arr = [4, 5, 1, 2, 1, 4]; // 5 is the answer;
const answer = FirstNonRepeat(arr);
console.log("Answer : ", answer);

// Time Complexity:
// First loop → O(n)
// Second loop → O(k), where k = number of unique elements
// O(n + k) → O(n), since k <= n
//
// T.C. = O(n)

// Space Complexity:
// Map can store up to n unique elements
// in the worst case.
//
// S.C. = O(n)
