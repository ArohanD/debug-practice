// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

const topKFrequent = (nums, k) => {
  let tracker = {};
  nums.forEach(num => {
    tracker[num] ? tracker[num]++ : tracker[num] = 1;
  })
  let arrayTrack = Object.entries(tracker).sort((a, b) => b[1] - a[1])
  console.log(arrayTrack)
  let returnArray = [];
  for (let i = 0; i < k; i++){
    returnArray.push(Number(arrayTrack[i][0]))
  }
  return returnArray;
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))