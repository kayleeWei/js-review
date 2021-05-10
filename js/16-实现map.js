    // 实现
    Array.prototype.myMap = function(fn, thisValue) {
      let res = []
      thisValue = thisValue||[]
      let arr = this
      for(let i=0; i<arr.length; i++) {
          res.push(fn.call(thisValue, arr[i],i,arr))   // 参数分别为this指向，当前数组项，当前索引，当前数组
      }
      return res
  }
  // 使用
  const a = [1,2,3];
  const b = a.myMap((a,index)=> {
          console.log(`索引${index}的值为`,a+1)
          return a+1; 
      }
  )
  console.log(b)   // 输出2，3，4