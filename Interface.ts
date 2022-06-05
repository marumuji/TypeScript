export interface Name {
  first: string;
  last: string;
}

var name: Name;

name = {
  first: "John",
  last: "Doe"
}

console.log(name);

name = {           // Error : `second` is missing
  first: 'John'
};
name = {           // Error : `second` is the wrong type
  first: 'John',
  second: 1337
};