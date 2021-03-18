const x = {}
const testData = {
  a: 111,
  b: 'cccc',
  222: false,
  c: x,
  d: x, // 不应该重复计算内存占用
}

// 每一个长度的string 占用2Bytes
// number：64位存储，8Bytes字节
// boolean：4字节

// 1. 对于计算机基础，js内存
// 2. 递归

const seen = new WeakSet(); // 用于缓存

function sizeOfObject (obj) {
  if (obj === null) {
    return 0;
  }
  let bytes = 0;
  const properties = Object.keys(obj);

  for (let i = 0; i < properties.length; i++) {
    const key = properties[i];
    bytes += caculator(key); // 计算key空间, 无论value是否重复引用同一个值，key都是要累计占用空间的

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (seen.has(obj[key])) {
        continue;
      }
      seen.add(obj[key]);
    }
    bytes += caculator(obj[key]); // 计算value空间
  }

  return bytes;
}

function caculator(object) {
  const objType = typeof object; // Object.prototype.toString.call(object) === '[object Object]'

  switch(objType) {
    case 'string': {
      return object.length * 2;
    }
    case 'boolean':
      return 4;
    case 'number': 
      return 8;
    case 'object': {
      if (Array.isArray(object)) {
        // 数组处理 [{ x: 1 }, 1]需要递归处理
        return object.map(caculator).reduce((res, cur) => res + cur, 0);
      } else {
        // 对象处理
        return sizeOfObject(object);
      }
    }
    default:
      return 0;
  }
}

console.log(caculator(testData))