let Randomize = (items) => {
  let randomArr = [];
  for (let i = items.length - 1; i >= 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    for (let j = 0, k = 0; j <= items.length - 1; j++) {
      if (randomArr[j] === undefined) {
        if (k === r) {
          randomArr[j] = items[i];
          break;
        }
        k++;
      }
    }
  }
  return randomArr;
}

export default Randomize