let arr = [...new Array(100)].map(() => Math.round(Math.random() * 1000));

// 선택정렬
function sortSelection(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;
		let min;
		for (let j = i + 1; j < arr.length; j++) {
			if ( arr[j] < arr[minIndex] ) {
				minIndex = j;
			}
		}
		min = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = min;
		console.log(`${i} 회전 ${arr}`);
	}
}

let before = new Date();
console.log('before', [...arr]);
sortSelection(arr);
let after = new Date();
console.log('after', arr);
console.log((after - before)/1000, '초 소요됨');