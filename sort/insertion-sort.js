let arr = [...new Array(10)].map(() => Math.round(Math.random() * 100));

// 삽입정렬
function sortInsertion(arr) {
	let length = arr.length;
	for (let i = 1; i < length; i ++) {
		var pick = arr[i];
		console.log(`i pick arr[${i}] ${pick}`);
		for (let j = 0; j < i; j ++) {
			var prev = arr[j];
			console.log(`j arr[${j}] comparition ${pick} < ${prev}  ${pick < prev}`);
			if (pick < prev) {
				arr.splice(i, 1);
				arr.splice(j, 0, pick);
				console.log(`${pick}정렬`, [...arr]);
				break;
			}
		}
	}
}

let before = new Date();
console.log('before', [...arr]);
sortInsertion(arr);
let after = new Date();
console.log('after', arr);
console.log(`${(after - before)/1000}초 소요됨`);