"use strict";
// From chapter 2: Some basic TS. Kid stuff
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
};
let d = c.apple * 4;
console.log(a, b, c, d);
// ==========================================================
// @ts-ignore
function squareOf(n) {
    return n * n;
}
console.log(squareOf(4));
console.log(squareOf('z'));
function squareOfWithType(n) {
    return n * n;
}
console.log(squareOfWithType(4));
// @ts-ignore
console.log(squareOfWithType('z')); // TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
//# sourceMappingURL=index.js.map