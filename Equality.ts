/**
 * $ tsc Equality.ts
 * $ node Equality.js
   false
   true
   false
   false
 */


console.log(5 == "5");  // true
console.log(5 === "5");  // false

console.log("" == "0"); // false
console.log(0 == ""); // true

console.log("" === "0"); // false
console.log(0 === ""); // false