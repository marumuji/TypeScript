function* generator() {
  try {
    yield 'foo';
  }
  catch(err) {
    console.log(err.message);
  }
}

var iterator = generator();
var foo2 = iterator.next();
console.log(foo2.value);
var nextThing = iterator.throw(new Error('bar'));