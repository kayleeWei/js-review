// 实现call
Function.prototype.myCall = function (context, ...args) {
  if (context === null) {
    context = window;
  }

  if (typeof context !== 'object' && typeof context !== 'function') {
    context = new context.constructor(context);
  }

  let key = Symbol('key');
  context[key] = this;

  let res = context[key](...args);
  delete context[key];
  return res;
}
var a = 1;
function test () {
  console.log(this.a)
}
// console.log(test.myCall({ a: 2}))
// test.myCall({ a: 2});
// test.myCall('s');


// 实现apply
Function.prototype.myApply = function (context, args) {
  if (!context) context = window;

  if (typeof context !== 'object' && typeof context !== 'function') {
    context = new context.constructor(context);
  }

  const key = Symbol('key');
  context[key] = this;

  const res = context[key](...args);
  delete context[key];

  return res;
}

// test.myApply({ a: 3 }, ['teststr1', 'testStr2'])

// 实现bind
Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  const _this = this;

  return function Bind(...newArgs) {
    // 如果返回函数作为构造函数执行new， 则this应指向new新生成的对象
    if (this instanceof Bind) {
      _this.apply(this, [...args, ...newArgs]);
    } else {
      _this.apply(context, [...args, ...newArgs]);
    }
  }
}

let value = 2;
let foo = {
    value: 1
};
function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
    return {
		value: this.value,
		name: name,
		age: age
    }
};

// let bindFoo1 = bar.bind(foo, "Jack", 20); // 返回一个函数
// console.log(bindFoo1());
// let bindFoo2 = bar.bind(foo, "Jack"); // 返回一个函数
// console.log(bindFoo2(20));

let bindFoo = bar.bind(foo, 'Jack');
let obj = new bindFoo(20);
// console.log(obj)

