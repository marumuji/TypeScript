function hoge(x, y, z) { 
  console.log(x, y, z);
}
var args = [0, 1, 2];
// foo.apply(null, args)
hoge(...args);