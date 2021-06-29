// Array 문제 1 : Introduction Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

// 배열에서 가장 큰 연속되는 1의 숫자 구하기
var findMaxConsecutiveOnes1 = function (nums) {

  let pre = nums[0];
  let consecutiveZeroOrOne = [];
  let index = 0;

  nums.forEach((curr, i) => {
      if (pre !== curr) {
          consecutiveZeroOrOne.push(nums.slice(index, i));
          index = i;
      }
      pre = curr;

  });

  if (index != nums.length) {
      consecutiveZeroOrOne.push(nums.slice(index, nums.length));
  }

  const consecutiveZero = consecutiveZeroOrOne.map((arr) => {
      return (arr[0] == 0) ? 0 : arr.length;
  });

  return Math.max(...consecutiveZero);

  // 실행 결과
  // Your runtime beats 26.24 % of javascript submission
  // 42 / 42 test cases passed.
  // Status: Accepted
  // Runtime: 96 ms
  // Memory Usage: 44.6 MB
};


var findMaxConsecutiveOnes2 = function(nums) {

  const consecutiveOnes = nums.toString().replace(/,/g, '').split('0');
  return consecutiveOnes.sort().pop().length;

  // 실행 결과
  // Your runtime beats 17.21 % of javascript submissions
  // 42 / 42 test cases passed.
  // Status: Accepted
  // Runtime: 104 ms
  // Memory Usage: 44.9 MB
};
