//We are using Two Pointers
//here we are moving the i and j in the same direction from the left to right , 
//i moves slowly , while j moves  fastly
const MoveZerosToEnd = (nums: number[]) => {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] === 0 && nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else if (nums[i] === 0 && nums[j] === 0) {
      j++;
    } else {
      i++;
      j++;
    }
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
const answer = MoveZerosToEnd(nums);
console.log(answer);
