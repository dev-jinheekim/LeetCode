// Array 문제 3 : Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// 배열 값을 제곱하고 정렬하기
var sortedSquares = function(nums) {
  result = [];
  let squreingNumber = nums.map((num) => { return num * num; });
  squreingNumber.sort((pre, curr) => { return pre - curr });
  console.log(squreingNumber);ㅇ
  return squreingNumber;

  // 실행 결과
  // 137 / 137 test cases passed.
  // Status: Accepted
  // Runtime: 140 ms
  // Memory Usage: 47.7 MB
  // Your runtime beats 26.47 % of javascript submissions.

};