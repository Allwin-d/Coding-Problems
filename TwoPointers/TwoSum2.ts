const TwoSum2 = (numbers: number[], target: number) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
};

const numbers = [2, 7, 11, 15];
const target = 9;
console.log(TwoSum2(numbers, target));


//Time complexity -> in the worst case , More accurately, the while loop uses two pointers. Even though there are two pointers, each pointer only moves in one direction so its o(n);
//space complexity -> the variables left , right gets a constant space , so o(1);