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
let queue = []
let speed = 10


export async function mergeSort(percents, updateArray, numBars) {
  mSort(percents, 0, percents.length - 1);
  debugger;

  let bars = document.getElementsByClassName("bar");
  for (let ndx = 0; ndx < queue.length; ndx++) {
    let change = queue[ndx];
    
    setTimeout(() => {
      bars[change[0]].style.height = `${change[1]}%`
    }, ndx * speed)
  }
}

function mSort(percents, low, high) {
  if (high <= low) return;
  let mid = low + Math.floor((high - low) / 2);
  mSort(percents, low, mid);
  mSort(percents, mid + 1, high);
  merge(percents, low, mid, high);
}

function merge(percents, low, mid, high) {
  let i = low, j = mid + 1;
  for (let k = low; k <= high; k++) {
    aux[k] = percents[k];
  }

  let change;
  for (let k = low; k <= high; k++) {
    if (i > mid)                change = aux[j++];
    else if (j > high)          change = aux[i++];
    else if (aux[j] < aux[i])   change = aux[j++];
    else                        change = aux[i++];
    percents[k] = change;
    queue.push([k, change]);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
