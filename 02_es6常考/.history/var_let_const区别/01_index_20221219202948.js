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
function chifan() {
  console.log("我要吃米饭");
}
chifan();
function chifan() {
  console.log("我要吃面");
}
chifan();
