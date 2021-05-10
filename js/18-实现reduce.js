Array.prototype.my_reduce = function(callback,initialValue){
  if(!Array.isArray(this) || !this.length || typeof callback !== 'function'){
      return []
  }

  let hasInitialValue = initialValue !== undefined
  let value = hasInitialValue ? initialValue:this[0]
  for(let index= hasInitialValue?1:0; index<this.length;index++){
      const element = this[index]
      value = callback(value,element,index,this)
  }

  return value
}

//验证
let arr = [1, 2, 3, 4, 5]
let res = arr.my_reduce((pre, cur, i, arr) => {
  return pre + cur
}, 10)
console.log(res)