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

// Merge Sort

let aux = [];
let queue = [];
let speed = 10;

export async function mergeSort(percents, updateArray, numBars) {
  aux = [];
  queue = [];
  speed = 10;
  mSort(percents, 0, percents.length - 1);
  debugger;

  let bars = document.getElementsByClassName("bar");
  for (let ndx = 0; ndx < queue.length; ndx++) {
    let change = queue[ndx];

    setTimeout(() => {
      bars[change[0]].style.height = `${change[1]}%`;
      if (ndx == queue.length - 1) {
        let disableResetButton = document.getElementById("resetButton");  
        disableResetButton.removeAttribute("disabled");    
      }
    }, ndx * speed);
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
  let i = low,
    j = mid + 1;
  for (let k = low; k <= high; k++) {
    aux[k] = percents[k];
  }

  let change;
  for (let k = low; k <= high; k++) {
    if (i > mid) change = aux[j++];
    else if (j > high) change = aux[i++];
    else if (aux[j] < aux[i]) change = aux[j++];
    else change = aux[i++];
    percents[k] = change;
    queue.push([k, change]);
  }
}

export function quickSort(percents) {
  aux = [];
  queue = [];
  speed = 10;
  qSort(percents, 0, percents.length - 1);
  debugger;
  let bars = document.getElementsByClassName("bar");
  for (let ndx = 0; ndx < queue.length; ndx++) {
    let change = queue[ndx];

    if (typeof change[1] === "string") {
      setTimeout(() => {
        bars[change[0]].style.backgroundColor = `${change[1]}`;
      }, ndx * speed);
    } else {
      setTimeout(() => {
        bars[change[0]].style.height = `${change[1]}%`;
        if (ndx == queue.length - 1) {
          let disableResetButton = document.getElementById("resetButton");  
          disableResetButton.removeAttribute("disabled");    
        }
      }, ndx * speed);
    }
  }
}

function qSort(percents, low, high) {
  if (high <= low) return;
  let pivot = partition(percents, low, high);
  qSort(percents, low, pivot - 1);
  qSort(percents, pivot + 1, high);
}

function partition(percents, low, high) {
  let i = low,
    j = high + 1;
  let v = percents[low];
  queue.push([low, "red"]);
  while (true) {
    while (percents[++i] < v) if (i === high) break;
    while (v < percents[--j]) if (j === low) break;
    if (i >= j) break;
    exch(percents, i, j);
  }
  queue.push([low, "lightblue"]);
  exch(percents, low, j);
  return j;
}

function exch(array, val1, val2) {
  let temp = array[val1];

  queue.push([val1, array[val2]]);
  queue.push([val2, temp]);

  array[val1] = array[val2];
  array[val2] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
