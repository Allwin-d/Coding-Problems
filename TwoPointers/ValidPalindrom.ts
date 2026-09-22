const ValidPalindrome = (s: string) => {
  const newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = newString.length - 1;

  while (left < right) {
    if (newString[left] !== newString[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

const s = "Racecar";
const answer = ValidPalindrome(s);
console.log("Answer : ", answer);

//Time Complexity → O(n)
//The string is processed by replace(), toLowerCase(), and the
//while loop. Each operation takes O(n), so overall it remains O(n).

//Space Complexity → O(n)
//newString creates a new string whose size can depend on the
//input size. The left and right variables use O(1) space,
//but newString takes O(n), so overall space is O(n).
