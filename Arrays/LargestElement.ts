const LargestElement = (arr: number[]) => {
  let max = -Infinity;    // -Infinity is the smallest of all 
  for (let val of arr) {  //for loop runs o(n) times 
    if (val > max) {
      max = val;
    }
  }
  return max;
};

const arr = [3, 7, 2, 9, 4]; //the actual answer is 9
const answer = LargestElement(arr);
console.log("Answer : ", answer);


// Time and Space Complexity

// Time Complexity:
// O(n) -> because the for...of loop visits every element once.

// Space Complexity:
// O(1) -> because we only use a fixed number of variables
// (max and val) and don't create any additional data structure.
