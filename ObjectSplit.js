var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var rect = { x: 0, y: 10, width: 15, height: 20 };
var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
console.log(x, y, width, height);
rect.x = 10;
(x = rect.x, y = rect.y, width = rect.width, height = rect.height);
console.log(x, y, width, height);
var obj = { "some property": "some value" };
var someProperty = obj["some property"];
console.log(someProperty);
var foo = { bar: { bas: 123 } };
var bas = foo.bar.bas;
console.log(bas);
var _a = { w: 1, x: 2, y: 3, z: 4 }, w = _a.w, x = _a.x, remaining = __rest(_a, ["w", "x"]);
console.log(w, x, remaining);
