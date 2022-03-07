// 오름차순으로 정렬된 배열 2개를 합치기

// 감소하지 않는 순서로 정렬된 두 개의 정수 배열 nums1 및 nums2와 각각 nums1 및 nums2의 요소 수를 나타내는 두 개의 정수 m 및 n이 제공됩니다.
// nums1과 nums2를 내림차순으로 정렬된 단일 배열로 병합합니다.
// 최종 정렬된 배열은 함수에서 반환되지 않아야 하며 대신 배열 nums1 내부에 저장됩니다. 이를 수용하기 위해 nums1의 길이는 m + n입니다. 여기서 처음 m개 요소는 병합되어야 하는 요소를 나타내고 마지막 n개 요소는 0으로 설정되어 무시되어야 합니다. nums2의 길이는 n입니다.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
	let result = [];
	for (let i = 0; i < m - n; i++) {
		(nums1[i] < nums2[i]) ? result.push(nums1[i], nums2[i]) : result.push(nums1[i], nums2[i]);
		console.log(i, nums1[i], nums2[i], result);
	}
};

// 실행결과


// 개선점
var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;

function merge(nums1, m, nums2, n) {
	var result = [];
	for (var i = 0; i < m; i++) {
		if (nums1[i] < nums2[j]) {
			result.push(nums1[i]);
		} else {
			result.push(nums2[i]);
		}
	}
}

merge(nums1, m, nums2, n)
