var list = [
    {
        id: 'foo',
        display: 'Foo select'
    },
    {
        id: 'bar',
        display: 'Bar select'
    },
];
var fooIndex = list.map(function (i) { return i.id; }).indexOf('foo');
console.log(fooIndex);
