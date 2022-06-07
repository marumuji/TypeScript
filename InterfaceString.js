String.prototype.endsWith = function (suffix) {
    var str = this;
    return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};
console.log('foo bar'.endsWith('bas'));
console.log('foo bas'.endsWith('bas'));
