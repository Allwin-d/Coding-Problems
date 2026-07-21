
//My Solution
const ValidAnagram = (s: string, t: string) => {
  let objOfS: Record<string, number> = {};
  for (let val of s) {
    objOfS[val] = (objOfS[val] || 0) + 1;
  }
  console.log("Object of S : ", objOfS);

  let objOfT: Record<string, number> = {};
  for (let val of t) {
    objOfT[val] = (objOfT[val] || 0) + 1;
  }
  console.log("Object of T : ", objOfT);

  for (let key in objOfS) {
    if (objOfS[key] !== objOfT[key]) {
      return false;
    }
  }
  return true;
};

const s = "anagram";
const t = "nagaram";
const answer = ValidAnagram(s, t);
console.log("Answer : ", answer);
