// 1. What is a function? aris kodis bloki romelic shesruldeba gamodzaxebisas.logikis agwera
// 2. What is a function call?  tu ar gamovidzaxet funqcia araferi moxdeba
// 4. Create a function that takes a string as an argument and greets the user. For example, if the function is called with "John," the function should return "Hello, John!"
function hello(name) {
     return `hello,` + name + `!`;
}
console.log(hello(`jon`));
// 5. Create a function that takes a string as an argument and returns a string with the argument value in reverse. For example, if the function is called with the input "hello," the function should return "olleh." (Use a loop, not a method that does this in one step.) ar gamovida
function hi(reverce) {
     return reverce;
}
console.log(hi(`hello`));
// 
// 10
function foo(x) {
     return x * 2;
 }
 let x = 7;
 x = foo(x);
 console.log(x);
//  11 ვერ
// function bar() {
//     return x += 1;
//  }
 
//  function foo() {
//      bar();
//      x *= 2;
//  }
 
//  let x = 7;
//  foo();
//  console.log(x); // x should change!