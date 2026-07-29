const GroupAnagrams = (strs: string[]) => {
  const primeMap: Record<string, number> = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 97,
    z: 101,
  };

  const obj: Record<number, string[]> = {};

  for (const val of strs) {
    let mul = 1;

    // Calculate the unique prime product for the current word.
    for (const ch of val) {
      mul *= primeMap[ch];
    }

    // Check whether a group with the same prime product already exists.
    if (obj[mul]) {
      // The value associated with the key is an array,
      // so append the current word to the existing group.
      obj[mul].push(val);
    } else {
      // If the prime product does not exist as a key,
      // create a new group containing the current word.
      obj[mul] = [val];
    }
  }

  console.log("Object:", obj);

  // Return only the grouped arrays, not the object keys.
  return Object.values(obj);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const answer = GroupAnagrams(strs);
console.log(answer);

/*
Time Complexity:
- O(n × k)
  where:
    n = number of strings
    k = average length of each string

Reason:
- The outer loop iterates through all n strings.
- The inner loop processes every character of each string exactly once.
- Object lookup and insertion are O(1) on average.

Space Complexity:
- O(n)

Reason:
- The object stores every input string exactly once.
- The primeMap contains only 26 entries, so it uses O(1) extra space.
*/