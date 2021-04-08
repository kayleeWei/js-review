// https://segmentfault.com/a/1190000020255831
// 浅拷贝
function clone(target) {
  let cloneObj = {};

  for(let k in target) {
    cloneObj[k] = target[k];
  }

  return cloneObj; 
}

// 深拷贝基础版本
function deepClone1(target) {
  let cloneObj = {};

  if (typeof target === 'object') {
    for (let k in target) {
      cloneObj[k] = deepClone1(target[k]);
    }
  } else {
    cloneObj = target;
  }

  return cloneObj;
}

const target = {
  field1: 1,
  field2: undefined,
  field3: 'test',
  field4: {
    child1: 'child1Str',
    child2: {
      child2: 'child2Str'
    }
  }
}


// 深拷贝——兼容数组
function deepClone2(target) {
  if (typeof target === 'object') {
    const cloneObj = Array.isArray(target) ? [] : {};

    for(let k in target) {
      cloneObj[k] = deepClone2(target[k]);
    }

    return cloneObj;
  } else {
    return target;
  }
}


// 深拷贝——解决循环引用
const target2 = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
}
target2.target = target2;


// https://segmentfault.com/a/1190000020255831
function deepClone3(target, map = new weakMap()) {
  if (typeof target === 'object') {
    const cloneObj = Array.isArray(target) ? [] : {};

    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneObj)

    for (let k in target) {
      cloneObj[k] = deepClone3(target[k], map);
    }

    return cloneObj;

  } else {
    return target;
  }
} 
console.log(deepClone3(target2));