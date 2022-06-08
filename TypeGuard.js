function doStuff(q) {
    if ('xy' in q) {
        console.log('x = ', q);
    }
    else {
        console.log('y = ', q);
    }
}
var a = { x: 1 };
var b = { y: '1' };
doStuff(a);
doStuff(b);
