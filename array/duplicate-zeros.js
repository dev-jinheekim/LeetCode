// 0 복제하기
// 고정 길이 정수 배열 arr이 주어지면 0이 발생할 때마다 복제하고 나머지 요소를 오른쪽으로 이동합니다.

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

let arr = [1,0,2,3,0,4,5,0];

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
	let length = arr.length;
	for ( let i = 0; i < length; i ++) {
		if (arr[i] === 0) {
			arr.splice(i, 0, 0);
			i++;
		}
	}
	arr.splice(length, arr.length);
}

// 실행결과
// 30 / 30 test cases passed.
// Status: Accepted
// Runtime: 79 ms
// Memory Usage: 44.6 MB
// Submitted: 0 minutes ago
// Your runtime beats 88.55 % of javascript submissions
// Your memory usage beats 12.39 % of javascript submissions.


// 개선점 시작 전에 0의 갯수만큼 배열의 뒤를 삭제한다.