function solution(str) {
  return str.replace(/-(\w)/g, function(a, b) {
    // console.log(a, b)
    return b.toUpperCase()
  })
}

console.log(solution('aaa-bbb-ccc'))