const ContainsDuplicate = (nums: number[]) => {
  return new Set(nums).size !== nums.length;
};

const nums = [1, 2, 3, 1];
const answer = ContainsDuplicate(nums);
console.log("Answer : ", answer);
