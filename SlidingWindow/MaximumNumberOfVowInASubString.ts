const MaximumNumberOfVowInASubString = (s: string, k: number) => {
  let count = 0;
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
  }

  let maxVowel = count;

  for (let right = k; right < s.length; right++) {
    if (vowels.has(s[right - k])) {
      count--;
    }
    if (vowels.has(s[right])) {
      count++;
    }
    maxVowel = Math.max(count, maxVowel);
    if (maxVowel === k) {
      return k;
    }
  }
  return maxVowel;
};

const s = "abciiidef";
const k = 3;
const answer = MaximumNumberOfVowInASubString(s, k);
console.log("Answer : ", answer);

//Time and Space Complexity
//The time complexity is o(n) because combining both the for loops it runs the length of an input string so o (N);
//Space complexity , we are using constant space for the variables like count, maxVowel,i and right so its o(1);
