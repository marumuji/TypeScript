var funcs = [];
var _loop_1 = function (i) {
    funcs.push(function () {
        console.log(i);
    });
};
for (var i = 0; i < 3; i++) {
    _loop_1(i);
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
