const TwoSum = (nums: number[], target: number) => {
  let map = new Map(); // Map stores data as key-value pairs.
  // Keys can be numbers, strings, booleans, objects, etc.
  // Here, the key is the number from the array, and the value is its index.

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      // has() checks whether the given key exists in the map and  Average time complexity is O(1).
      return [i, nums.indexOf(diff)];
    }
    map.set(nums[i], i); // Store the current number as the key and its index as the value.
  }
  return -1;
};

const nums = [3, 2, 4];
const target = 6;
console.log(TwoSum(nums, target));
