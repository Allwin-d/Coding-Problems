var minSubArrayLen = function (target: number, nums: number[]) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      let length = right - left + 1;

      minLength = Math.min(minLength, length);

      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
