function getIntersection(...arrs) {
  return Array.from(new Set(arrs.reduce((acc, arr) => {
    return acc.filter(item => arr.includes(item));
  })))
}

console.log(getIntersection([1, 2, 3], [2, 3, 4], [3, 5]))