const TwoSum = (arr: number[], target: number) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (map.has(diff)) {
      return [i, map.get(diff)]; //this will give the index , because we stored value as key and index as value..
    }
    map.set(arr[i], i);
  }
};

const arr = [2, 7, 11, 15]; //answer is [0,1];
const target = 9;
const answer = TwoSum(arr, target);
console.log("Answer : ", answer);

// Time Complexity:
// The loop can process all n elements.
// Map operations (has, get, set) are O(1) on average.
// Therefore, T.C. = O(n).

// Space Complexity:
// In the worst case, Map can store n elements.
// Therefore, S.C. = O(n).
