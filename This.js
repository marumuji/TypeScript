function foo() {
    console.log(this);
}
foo(); // グローバル値をログに出力する
var bar = {
    foo: foo
};
bar.foo();
