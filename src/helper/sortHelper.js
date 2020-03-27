export async function bubbleSort(percents, updateArray, numBars) {
  let newArray = percents;

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] > newArray[j + 1]) {
        let temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
        updateArray(newArray);
        await sleep(1000 / numBars);
      }
    }
  }
}

let aux = [];
let setState

export async function mergeSort(percents, updateArray, numBars) {
  // debugger;
  let newArray = percents;
  setState = updateArray

  mSort(newArray, 0, newArray.length - 1);
}

async function mSort(percents, low, high) {
  // debugger;
  if (high <= low) return;
  let mid = low + Math.floor((high - low) / 2);
  mSort(percents, low, mid);
  mSort(percents, mid + 1, high);
  merge(percents, low, mid, high);
}

async function merge(percents, low, mid, high) {
  debugger;
  let i = low, j = mid + 1;
  for (let k = low; k <= high; k++) {
    aux[k] = percents[k];
  }

  for (let k = low; k <= high; k++) {
    debugger;
    if (i > mid)                percents[k] = aux[j++];
    else if (j > high)          percents[k] = aux[i++];
    else if (aux[j] < aux[i])   percents[k] = aux[j++];
    else                        percents[k] = aux[i++];
    
    setState(percents)
    // await sleep(100);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
