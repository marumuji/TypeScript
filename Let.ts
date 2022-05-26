var funcs = [];
for (var i = 0; i < 3; i++) {
  (function() {
    var local = i;
    funcs.push(function() {
      console.log(local)
    })
  })();
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
}