/* 
对于这个知识点，我们应该先来了解提升（hoisting）这个概念。
*/
// console.log(a);
// var a = 2;
/* 
从上述代码中我们可以发现，
虽然变量还没有被声明，但是我们却可以使用这个未被声明的变量，
这种情况就叫做提升，并且提升的是声明。
*/
// var a
// console.log(a) // undefined
// a = 1

// var a = 10;
// var a;
// console.log(a);

// var a
// var a
// a = 10
// console.log(a)

// console.log(a);
// function a() {}
// var a = 10;

/* 
对于上述代码，打印结果会是 ƒ a() {}，
即使变量声明在函数之后。这说明了函数会被提升，并且优先于变量提升。
*/
// function chifan() {
//   console.log("我要吃米饭");
// }
// chifan();
// function chifan() {
//   console.log("我要吃面");
// }
// chifan();
/* 
与变量提升不同，函数提升不仅仅提升函数声明，而是提升函数整体
*/
// var chifan=function (){
//   console.log('我要吃米饭')
// }
// var chifan=function (){
//   console.log('我要吃面')
// }
// chifan()
// chifan()
/* 
首先在全局作用域下使用 let 和 const 声明变量，变量并不会被挂载到 window 上，这一点就和 var 声明就有了区别。
*/
// var a = 1;
// let b = 1;
// const c = 1;
// console.log(window.b); // undefined
// console.log(window.c); // undefined

// function test() {
//   console.log(a);
//   let a;
// }
// test();

// 最后我们总结下这小节的内容：
// - 函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
// - var 存在提升，我们能在声明之前使用。let、const 因为暂时性死区的原因，不能在声明前使用
// - var 在全局作用域下声明变量会导致变量挂载在 window 上，其他两者不会
// - let 和 const 作用基本一致，但是后者声明的变量不能再次赋值
