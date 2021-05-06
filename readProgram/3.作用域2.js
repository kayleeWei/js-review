var a = 10;
(function () {
  console.log(a) 
  a = 5 
  console.log(window.a) 
  var a = 20;
  console.log(a)
})()
// undefined 10 20


// 本题中有两个作用域，一个是全局作用域，一个是立即执行的匿名函数作用域。在全局作用域和立即执行的匿名函数作用域中分别有变量a。
// 因为var关键字的变量提升效果，所以立即执行函数中的第一个a其实打印的是var a中未定义的a，a = 5中的a也是这个局部作用域的a。
// 第二个打印因为指定了window.a，所以为全局作用域中的a。最后因为var可以重复声明，所以var a = 20改变的也是立即执行的匿名函数作用域中的a