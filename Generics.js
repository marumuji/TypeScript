function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed);
// reversed[0] = '1'; 
// reversed = ['1', '2'];
reversed[0] = 1;
reversed = [1, 2];
console.log(reversed);
