interface A {
  x: number;
}

interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ('x' in q) {
    console.log('x = ', q);
  } else {
    console.log('y = ', q);
  }
}

let a: A = {x: 1};
let b: B = {y: '1'};

doStuff(a);
doStuff(b);