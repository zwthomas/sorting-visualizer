export async function bubbleSort(percents, setState, numBars) {
    let newArray = percents;

    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] > newArray[j+1]) {
          let temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
          setState(newArray);
          await sleep(1000/numBars)
        }
      }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
