// Array 문제 2 : Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.
// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5

// 배열에서 자릿수가 짝수인 숫자의 개수
var findNumbers = function(nums) {

  let count = 0;

  nums.forEach((num) => {
      if (num.toString().length % 2 === 0) {
          count += 1;
      }
  });

  return count;

  // 실행 결과
  // 104 / 104 test cases passed.
  // Runtime: 76 ms
  // Memory Usage: 40.3 MB
  // Your runtime beats 89.01 % of javascript submissions
  // Your memory usage beats 22.47 % of javascript submissions.
};