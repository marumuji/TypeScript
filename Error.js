function takeSomethingComplex(arg) {
}
function getBar() {
    return 'some var';
}
var fail = {
    foo: 123,
    bar: getBar
};
takeSomethingComplex(fail);
