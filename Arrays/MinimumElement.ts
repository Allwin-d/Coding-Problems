const MinimumElement = (arr: number[]) => {
  let min = Infinity;     
  for (let val of arr) {  
    if (val < min) {
      min = val;
    }
  }
  return min;
};

const arr = [5, 2, 8, 1, 6]; // the actual answer is 1
const ans = MinimumElement(arr);
console.log("Answer : ", ans);

//Time and Space complexity 

//var min requires constant space so s/c => o(1);
//for loop runs o(n) times -> checks each and every array element so t/c => o(n)