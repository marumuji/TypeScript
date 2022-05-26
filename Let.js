var funcs = [];
for (var i = 0; i < 3; i++) {
    console.log("i=" + i);
    funcs.push(function () {
        console.log(i);
    });
}
for (var j = 0; j < 3; j++) {
    // funcs[j]();
}
