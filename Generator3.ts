function* generator() {
  var bar = yield 'foo';
  console.log(bar);
}

const iterator3 = generator();
const foo = iterator3.next();
console.log(foo.value);
iterator3.next('bar');