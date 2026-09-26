const IntersectionOfTwoArray = (arrOne: number[], arrTwo: number[]) => {
  const setTwo = new Set(arrTwo); 
  const inter = [];

  for (let val of arrOne) {
    if (setTwo.has(val)) {
      inter.push(val);
    }
  }

  return inter;
};

const arrOne = [1, 2, 2, 3];
const arrTwo = [2, 2, 4];
const answer = IntersectionOfTwoArray(arrOne, arrTwo);
console.log("Answer : ", answer);

//Time and Space comeplexity
//"Using a HashMap, the time complexity is O(n) because we traverse the array once and Map operations are O(1) on average.
//  The space complexity is O(n) because we may store up to n elements in the Map
