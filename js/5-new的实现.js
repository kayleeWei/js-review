function myNew(fn) {
  const newObj = Object.create(fn.prototype);
  result = fn.apply(newObj, [...arguments].slice(1)); //改变this指向，为实例添加方法和属性
  //确保返回的是一个对象(万一fn不是构造函数)
  return typeof result === "object" ? result : newObj;
}