// import { someVar, SomeType } from './foo';
import * as foo from './foo';

console.log(foo.someVar);
let a: foo.SomeType = {foo:"hoge"};
console.log(a.foo);