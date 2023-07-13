function MergeTwoSortedLists2(first: number[], second: number[]) {
  return [...first, ...second].sort((a, b) => a - b);
}

console.log(MergeTwoSortedLists2([1, 3, 4, 5, 7, 9, 11], [1, 2, 4, 11, 66]));

// The solution is very simple just concat two arrays and sort.
