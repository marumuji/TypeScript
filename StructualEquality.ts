type IdDisplay = {
  id: string,
  display: string
}

const list: IdDisplay[] = [
  {
    id: 'foo',
    display: 'Foo select',
  },
  {
    id: 'bar',
    display: 'Bar select',
  },
]

const fooIndex = list.map(i => i.id).indexOf('foo');
console.log(fooIndex);