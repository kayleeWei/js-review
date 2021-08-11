/**
 * @param {number} capacity
 */
// 数组
// var LRUCache = function(capacity) {
//   this.keys = [];
//   this.cacheObj = {};
//   this.capacity = capacity;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//   // 存在，则将顺序调整为最新
//   if (this.cacheObj[key]) {
//     removeKey(this.keys, key);
//     this.keys.push(key);
//     return this.cacheObj[key];
//   }

//   return -1;

// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//   // 已存在，则更新
//   if (this.cacheObj[key]) {
//     this.cacheObj[key] = value;
//     removeKey(this.keys, key);
//     this.keys.push(key);
//   } else {
//     // 不存在则加入
//     this.keys.push(key);
//     this.cacheObj[key] = value;

//     //超出则删除
//     if (this.keys.length > this.capacity) {
//       removeCacheAndKey(this.cacheObj, this.keys, key);
//     }
//   }

// };

// function removeKey(arr, k) {
//   if(!arr.length) return;

//   const idx = arr.findIndex(item => item === k);
//   arr.splice(idx, 1);
// }

// function removeCacheAndKey(cache, keys, k) {
//   delete cache[k];
//   keys.shift();
// }

// map解法
var LRUCache = function(capacity) {
  this.cache = new Map()
  this.capacity = capacity
}

LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    // 存在即更新,调整顺序
    const tmp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, tmp);
    return tmp
  }
  return -1
}

LRUCache.prototype.put = function(key, value) {
  // 已有该值，则更新位置
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
    // 缓存容量达到限制，先删除第一个
    this.cache.delete(this.cache.keys().next().value) // map的键值对是按set顺序存储的
  }
  this.cache.set(key, value);
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */