/**
 * Autogenrated using
 * `npx tsc function-ts.ts --lib=es2015 `
 */

"use strict";
exports.__esModule = true;
exports.getNameNullCoalescing = exports.getNameUndefined = exports.getNameUnsafe = exports.introduce = exports.promiseFetchData = exports.addWithUnionType = exports.addString = exports.printFunction = void 0;
// addNumber: (a: number, b: number) => number
var addNumber = function (a, b) {
    return a + b;
};
exports["default"] = addNumber;
// printFunction: (param1: number, param2: number) => void
var printFunction = function (param1, param2) {
    console.log("- Simple Print Function  " + addNumber(param1, param2));
};
exports.printFunction = printFunction;
// addString: (str1: string, str2?: string) => string
var addString = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return str1 + " " + str2;
};
exports.addString = addString;
// addWithUnionType: (str1: string, param: string | number) => string
var addWithUnionType = function (str1, param) { return str1 + " " + param; };
exports.addWithUnionType = addWithUnionType;
// promiseFetchData: (url: string) => Promise<string>
var promiseFetchData = function (url) { return Promise.resolve("Data from " + url); };
exports.promiseFetchData = promiseFetchData;
// introduce: (salutation: string, ...names: string[]) => strin
var introduce = function (salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return salutation + " " + names.join(' ');
};
exports.introduce = introduce;
// getName: (user: {first: string, last: string}) => string
var getNameUnsafe = function (user) {
    return user.first + " " + user.last;
};
exports.getNameUnsafe = getNameUnsafe;
// getNameOptional: (user: {first: string, last: string}) => string
var getNameOptional = function (user) {
    return (user === null || user === void 0 ? void 0 : user.first) + " " + (user === null || user === void 0 ? void 0 : user.last);
};
exports.getNameOptional = getNameOptional;
// getNameOptionalAndNullCoalescing: (user: {first: string, last: string}) => string
var getNameOptionalAndNullCoalescing = function (user) {
    var _a, _b;
    return ((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first') + " " + ((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last');
};
exports.getNameOptionalAndNullCoalescing = getNameOptionalAndNullCoalescing;
// module.exports = addNumber; Typescript does not allow module exports
