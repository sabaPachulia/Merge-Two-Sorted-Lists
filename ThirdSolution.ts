function MergeTwoSortedLists3(first: number[], second: number[]) {
  const result: number[] = [];

  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < first.length || secondIndex < second.length) {
    if (first[firstIndex] <= second[secondIndex]) {
      result.push(first[firstIndex]);
      firstIndex++;
    } else {
      result.push(second[secondIndex]);
      secondIndex++;
    }
  }

  return result;
}

console.log(MergeTwoSortedLists3([1, 3, 4, 5, 7, 9, 11], [1, 2, 4, 11, 66]));

// 1) The function first creates two variables called firstIndex and secondIndex. These variables are used to keep track of the current index of the elements in the two input lists.
// 2) The next step is to create a while loop. The while loop will continue to iterate as long as either firstIndex or secondIndex is not equal to the last element's indexes of arrays.
// 3) Then inside the while loop we define which number is lower and than push the lower number to the result array
