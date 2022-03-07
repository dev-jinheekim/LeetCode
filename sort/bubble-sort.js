let arr = [...new Array(100)].map(() => Math.round(Math.random() * 1000));

// 버블정렬 (거품정렬)
function sortBubble(arr) {
  let jLenght = arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < jLenght; j ++ ) {
      if (arr[j] > arr[j + 1]) {
        let buffer = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = buffer;
				console.log(`${i} 회전 ${arr}`)
      }
    }
    jLenght--;
  }
}

let before = new Date();
console.log('before', [...arr]);
sortBubble(arr);
let after = new Date();
console.log('after', arr);
console.log((after - before)/1000, '초 소요됨');

