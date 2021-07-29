const arr = [...new Array(100)].map(() => Math.round(Math.random() * 1000));

// Bubble sort
function sortBubble(arr) {
  let jLenght = arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < jLenght; j ++ ) {
      if (arr[j] > arr[j + 1]) {
        const buffer = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = buffer;
      }
    }
    jLenght--;
  }
}
