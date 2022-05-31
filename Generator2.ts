function* generator(){
  console.log('Execution started');
  yield 0;
  console.log('Excecution resumed');
  yield 1;
  console.log('Excecution resumed');
}

var iterator = generator();
console.log('Starting iteration');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());