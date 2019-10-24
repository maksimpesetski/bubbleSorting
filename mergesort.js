function split(wholeArray) {
  let result = [];

  if (wholeArray.length === 1) {
    return wholeArray;
  } else {
    const middlePoint = Math.ceil(wholeArray.length / 2);

    let firstHalf = wholeArray.slice(0, middlePoint);
    let secondHalf = wholeArray.slice(middlePoint);

    return [firstHalf, secondHalf]
  }
}

function merge(first, second) {
  let result = [];

  while (first.length || second.length) {

    if (!first.length) {
      return result.concat(second);
    }

    if (!second.length) {
      return result.concat(first);
    }

    if (first[0] < second[0]) {
      result.push(first.shift())
    } else {
      result.push(second.shift())
    }
  }
}


function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }

  let splited = split(arr)

  let first = mergeSort(splited[0])
  let second = mergeSort(splited[1])

  return merge(first, second)
}
