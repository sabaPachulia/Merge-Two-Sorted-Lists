type Stats = Record<string, Array<number>>;

function MergeTwoSortedLists1(first: number[], second: number[]) {
  const stats: Stats = {};

  [...first, ...second].forEach((data) => {
    stats[data] ? stats[data].push(data) : (stats[data] = [data]);
  });

  const result: number[] = [];
  for (const key in stats) {
    result.push(...stats[key]);
  }

  return result;
}

console.log(MergeTwoSortedLists1([1, 3, 4, 5, 7, 9, 11], [1, 2, 4, 11, 66]));

// 1) The function first creates an empty object called stats. This object will be used to store the statistics of the data, where the key is the number and the value is an array of the numbers.
// 2) The next step is to iterate through the two input lists using the forEach method. For each number in the lists, the function checks if the number is already present in the stats object. If the number is already present, the function simply adds the number to the array associated with the number. If the number is not present in the stats object, the function creates a new array for the number and adds the number to the array.
// 3) The final step is to iterate through the stats object and add all the numbers in the arrays to the result array.
