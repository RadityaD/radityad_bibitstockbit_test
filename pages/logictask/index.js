import React, { useState, useRef } from 'react';

const defaultArray = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

const LogicTask = () => {
  const [hasil, setHasil] = useState('');
  const inputRef = useRef();

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

  // const sortedStringArr = getSortedString(defaultArray);
  // groupSameAnagram(sortedStringArr, defaultArray);

  const handleRun = () => {
    let customArr;
    const customVal = inputRef.current ? inputRef.current.value : '';
    try {
      customArr = customVal ? JSON.parse(customVal) : defaultArray;
    } catch (e) {
      alert('bikin arraynya sesuai contoh yak, biar bisa diparse');
    }

    const sortedStringArr = getSortedString(customArr);
    const grouped = groupSameAnagram(sortedStringArr, customArr);

    setHasil(grouped);
  };

  return (
    <div
      style={{
        padding: '20%',
        color: 'white',
      }}
    >
      <div>Default Anagram Array: {JSON.stringify(defaultArray)}</div>
      <br />
      <div>
        Buat array-mu sendiri:{' '}
        {`(e.g ${'["kasur", "ini", "itu", "bau", "rusak", "abu"]'})`}
      </div>
      <textarea ref={inputRef} />
      <br />
      <div>
        <button onClick={handleRun}>Jalankan (Grup Anagram)</button>
      </div>

      <p>Hasil:</p>
      <pre>{JSON.stringify(hasil, null, 2)}</pre>
    </div>
  );
};

export default LogicTask;
