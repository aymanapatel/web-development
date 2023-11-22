/**
 * Run using
 * npx ts-node function-test-ts.ts
 */
import addNumber, 
{addString, addWithUnionType, getNameUnsafe, introduce, printFunction,
    getNameOptional, getNameOptionalAndNullCoalescing

} from "./function-ts";

console.log(`- Simple Function ${addNumber(1,2)}`)
printFunction(1,2)
console.log(`- Simple Function String ${addString("blo","jack")}`)
console.log(`- Function with Optional ${addString("jack")}`)
// console.log(`- Function with Promise ${promiseFetchData("http:www/google.com")}`)
console.log(`- Function with Spread Operator ${introduce("Ayman", "Arif", "Patel")}`)
console.log(`- Function with Union Type ${addWithUnionType("Ayman", 1)}`)
console.log(`- Get Name Function with Unsafe Behaviour ${getNameUnsafe({first: "Ayman", last: "Patel"})}`)
console.log(`- Get Name Function with Undefined Behaviour ${getNameOptional({first: "Ayman", last: "Patel"})})}`)
console.log(`- Get Name Function with Null Coalescing Behaviour ${getNameOptionalAndNullCoalescing({first: "Ayman", last: "Patel"})})}`)

