function foo() {
  console.log(this);
}

foo(); // グローバル値をログに出力する
let bar = {
  foo
}

bar.foo();