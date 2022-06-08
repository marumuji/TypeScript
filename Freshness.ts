function logName(something: { name: string }) {
  console.log(something.name);
}

var person = { name: 'matt', job: 'being awesome' };
var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
var random = { note: `I don't have a name property`};

logName(person);
logName(animal);
logName(random);