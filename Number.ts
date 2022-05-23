console.log({max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER});
// {max: 9007199254740991, min: -9007199254740991}

console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true!
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true!

console.log(Number.MAX_SAFE_INTEGER);      // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);  // 9007199254740992 - Correct
console.log(Number.MAX_SAFE_INTEGER + 2);  // 9007199254740992 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 3);  // 9007199254740994 - Rounded - correct by luck
console.log(Number.MAX_SAFE_INTEGER + 4);  // 9007199254740996 - Rounded!

// 安全な値
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true

// 危険な値
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// なぜならオーバーフローによって値が丸められている可能性があるからです
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)); // false

console.log(Math.sqrt(-1)); // NaN
console.log(Number.isNaN(NaN)); // true

console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308

console.log( 1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

console.log(Number.MIN_VALUE);  // 5e-324

console.log(Number.MIN_VALUE / 10);  // 0