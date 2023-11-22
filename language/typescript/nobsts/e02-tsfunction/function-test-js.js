/**
 * Run using `node function-test.js`
 */

const {addString, addWithUnionType, getNameUnsafe, introduce, printFunction, getNameOptionalAndNullCoalescing, getNameOptional}  = require("./function-js")


printFunction(1,2)
console.log(`- Simple Function String ${addString("blo","jack")}`)
console.log(`- Function with Optional ${addString("jack")}`)
// console.log(`- Function with Promise ${promiseFetchData("http:www/google.com")}`)
console.log(`- Function with Spread Operator ${introduce("Ayman", "Arif", "Patel")}`)
console.log(`- Function with Union Type ${addWithUnionType("Ayman", 1)}`)
console.log(`- Get Name Function with Unsafe Behaviour ${getNameUnsafe({first: "Ayman"})}`)
console.log(`- Get Name Function with Undefined Behaviour ${getNameOptional({first: "Ayman"})}`)
console.log(`- Get Name Function with Null Coalescing Behaviour ${getNameOptionalAndNullCoalescing({first: "Ayman"})}`)

