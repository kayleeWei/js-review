// 1. 基础版
class Promise {
  callbacks = [];
  constructor(fn) {
    fn(this._resolve.bind(this));
  }

  then(onFulfilled) {
    this.callbacks.push(onFulfilled);

    return this; // 增加then的链式调用
  }

  _resolve(value) {
    this.callbacks.forEach(fn => fn(value));
  }
}

// let p = new Promise(resolve => {
//   setTimeout(() => {
//     console.log('done');
//     resolve('3s');
//   }, 3000);
// }).then((tip) => {
//   console.log('then1', tip);
// }).then((tip) => {
//   console.log('then2', tip)
// });
// ------------------------------------------------------


// 2. 增加延迟机制，需要保证resolve执行之前，then方法已注册完所有回调
class Promise1 {
  callbacks = [];
  constructor(fn) {
    fn(this._resolve.bind(this));
  }

  then(onFulfilled) {
    this.callbacks.push(onFulfilled);
    return this;
  }

  _resolve(value) {
    setTimeout(() => { // 增加延迟
      this.callbacks.forEach(fn => fn(value))
    });
  }
}

// ------------------------------------------------------

// 3. 增加状态 （解决在 resolve 执行后，再通过 then 注册上来的 onFulfilled没有机会执行）
// pending 可以转化为 fulfilled 或 rejected 并且只能转化一次
class Promise2 {
  callbacks = [];
  value = null; // 保存结果
  state = 'pending'; // 增加状态

  constructor(fn) {
    fn(this._resolve.bind(this));
  }

  then(onFulfilled) {
    if (this.state === 'pending') {
      this.callbacks.push(onFulfilled);
    } else {
      onFulfilled(this.value);
    }

    return this;
  }

  _resolve(value) {
    this.state = 'fulfilled';
    this.value = value;
    this.callbacks.forEach(fn => fn(value));
  }
}

let p = new Promise2(resolve => {
  resolve('同步');
}).then((tip) => {
  console.log('then1', tip);
}).then((tip) => {
  console.log('then2', tip)
});

setTimeout(() => {
  p.then((tip) => {
    console.log('then3', tip);
  });
});

// ------------------------------------------------------

// 但链式调用，只是在 then 方法中 return 了 this，使得 Promise 实例可以多次调用 then 方法，但因为是同一个实例，调用再多次 then 也只能返回相同的一个结果
// 引入真正的链式调用，then 返回的一定是一个新的Promise实例。
// 链式调用实现
class Promise3 {
  callbacks = [];
  value = null;
  state = 'pending';

  constructor(fn) {
    fn(this._resolve.bind(this));
  }

  then(onFulfilled) {
    return new Promise(resolve => {
      this._handle({
        onFulfilled: onFulfilled || null,
        resolve: resolve,
      });
    });
  }

  _handle(callback) {
    if (this.state === 'pending') {
      this.callbacks.push(callback);
      return;
    }

    // 如果then中没有传递任何东西
    if (!callback.onFulfilled) {
      callback.resolve(this.value);
      return;
    }

    var ret = callback.onFulfilled(this.value);
    callback.resolve(ret);
  }

  _resolve(value) {
    this.state = 'fulfilled';
    this.value = value;
    this.callbacks.forEach(callback => this._handle(callback));
  }
}

const mockAjax = (url, s, cb) => {
  setTimeout(() => {
    cb(url + '请求耗时' + s + '秒');
  }, s * 1000);
}

new Promise3(resolve => {
  mockAjax('getUserId', 1, function(res) {
    resolve(res);
  });
}).then(res => {
  console.log(res)
})

// ------------------------------------------
//  onFulfilled 返回值是 value 的情况，如果是一个 Promise 呢？是不是就可以通过 onFulfilled，由使用 Promise 的开发者决定后续 Promise 的状态

// _resolve(value) {

//   if (value && (typeof value === 'object' || typeof value === 'function')) {
//       var then = value.then;
//       if (typeof then === 'function') {
//           then.call(value, this._resolve.bind(this));
//           return;
//       }
//   }

//   this.state = 'fulfilled';//改变状态
//   this.value = value;//保存结果
//   this.callbacks.forEach(callback => this._handle(callback));
// }



// ----------------------------------

//完整的实现 + reject
class Promise {
  callbacks = [];
  state = 'pending';//增加状态
  value = null;//保存结果
  constructor(fn) {
      fn(this._resolve.bind(this), this._reject.bind(this));
  }
  then(onFulfilled, onRejected) {
      return new Promise((resolve, reject) => {
          this._handle({
              onFulfilled: onFulfilled || null,
              onRejected: onRejected || null,
              resolve: resolve,
              reject: reject
          });
      });
  }
  _handle(callback) {
      if (this.state === 'pending') {
          this.callbacks.push(callback);
          return;
      }

      let cb = this.state === 'fulfilled' ? callback.onFulfilled : callback.onRejected;

      if (!cb) { //如果then中没有传递任何东西
          cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
          cb(this.value);
          return;
      }

      let ret = cb(this.value);
      cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
      cb(ret);
  }
  _resolve(value) {
    if (value && (typeof value === 'object' || typeof value === 'function')) {
        var then = value.then;
        if (typeof then === 'function') {
            then.call(value, this._resolve.bind(this), this._reject.bind(this));
            return;
        }
    }

    this.state = 'fulfilled';//改变状态
    this.value = value;//保存结果
    this.callbacks.forEach(callback => this._handle(callback));
  }
  _reject(error) {
      this.state = 'rejected';
      this.value = error;
      this.callbacks.forEach(callback => this._handle(callback));
  }
}




// catch

// catch(onError){
//   return this.then(null, onError);
// }

// finally

// finally(onDone){
//   return this.then(onDone, onDone);
// }

// Promise.resolve

// static resolve(value) {
//   if (value && value instanceof Promise) {
//     return value;
//   } else if (value && typeof value === 'object' && typeof value.then === 'function') {
//     let then = value.then;
//     return new Promise(resolve => {
//       then(resolve);
//     });

//   } else if (value) {
//     return new Promise(resolve => resolve(value));
//   } else {
//     return new Promise(resolve => resolve());
//   }
// }

// Promise.all

static all(promises) {
  return new Promise((resolve, reject) => {
    let fulfilledCount = 0
    const itemNum = promises.length
    const rets = Array.from({ length: itemNum })
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(result => {
        fulfilledCount++;
        rets[index] = result;
        if (fulfilledCount === itemNum) {
          resolve(rets);
        }
      }, reason => reject(reason));
    })

  })
}

// Promise.race

static race(promises) {
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(function (value) {
        return resolve(value)
      }, function (reason) {
        return reject(reason)
      })
    }
  })
}
