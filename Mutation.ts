var foo = {};
var bar = foo;
var baz = {};

console.log(foo === bar); // true
console.log(foo === baz); // false