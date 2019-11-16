// Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

// Example 1:
// Input: 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.
// Example 2:
// Input: 9973
// Output: 9973
// Explanation: No swap.
// Note:
// The given number is in the range [0, 108]

const maximumSwap = (num)  => {
  let digitArray = num.toString().split('').map((el) => Number(el));
  let indexTracker = 0;
  
  const recurse = (array) => {
      if(array.length === 0) return
      let max = array.reduce((a,b) => a > b ? a : b);
      if(array.indexOf(max) === 0){
          indexTracker++;
          array.shift()
          recurse(array)
      } else {
          let maxIndex = getLastOccurenceIndex(array, max);
          digitArray[indexTracker + maxIndex] = array[0];
          digitArray[indexTracker] = max;
          return;
      }
  }

  recurse(digitArray);
  return Number(digitArray.map((el) => el.toString()).join(''))
}

console.log(maximumSwap(2736))
console.log(maximumSwap(9973))
console.log(maximumSwap(5468729))
console.log(maximumSwap(98368))
console.log(maximumSwap(5495345))
console.log(maximumSwap(98368))
console.log(maximumSwap(1993))

let a = [1,9,9,3]

function getLastOccurenceIndex(array, val) {
  for (var i = array.length - 1; i >= 0; i--){
      if(array[i] === val) return i;
  }
}

console.log(getLastOccurenceIndex(a, 9))


