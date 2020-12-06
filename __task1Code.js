var arrTest = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

function getSortedString(inputArr) {
  let finalArr = [];
  let inputLen = inputArr.length;
  for (let i = 0; i < inputLen; i++) {
    let splittedSelection = inputArr[i].split('');
    let selectedLen = splittedSelection.length;
    for (let j = 0; j < selectedLen; j++) {
      for (let k = 0; k < selectedLen; k++) {
        if (splittedSelection[k] > splittedSelection[k + 1]) {
          let tmp = splittedSelection[k];
          splittedSelection[k] = splittedSelection[k + 1];
          splittedSelection[k + 1] = tmp;
        }
      }
    }
    finalArr.push(splittedSelection.join(''));
  }
  return finalArr;
}

function checkIfExist(inputArr, value) {
  return inputArr.indexOf(value) !== -1;
}

function groupSameAnagram(inputArr, originalArr = []) {
  let finalArr = [];
  let inputLen = inputArr.length;

  let curr;
  let keys = [];
  let indexes = {};
  // get index
  for (let i = 0; i < inputLen; i++) {
    if (curr !== inputArr[i] && !checkIfExist(keys, inputArr[i])) {
      curr = inputArr[i];
      keys.push(curr);
      indexes[curr] = [];
      for (let j = 0; j < inputLen; j++) {
        if (curr === inputArr[j]) {
          indexes[curr].push(j);
        }
      }
    }
  }
  // grup same
  for (let k = 0; k < keys.length; k++) {
    let tmp = [];
    const selection = indexes[keys[k]];
    const selectionLen = selection.length;
    for (let l = 0; l < selectionLen; l++) {
      tmp.push(originalArr[selection[l]]);
    }
    finalArr.push(tmp);
  }
  return finalArr;
}

const sortedStringArr = getSortedString(arrTest);
const FINAL = groupSameAnagram(sortedStringArr, arrTest);

console.log(FINAL);
