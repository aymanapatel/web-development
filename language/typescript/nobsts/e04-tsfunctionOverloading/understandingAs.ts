
let x: unknown

interface SomeInterface {
    i1: number
    i2: number
}

let arg1 = x as number;

let arg2 = x as SomeInterface

arg2.i1 = 1 // ❌[JS Runtime Error] TypeError: Cannot set property 'i1' of undefined

arg2 = {
    i1: 1,
    i2: 2
}
console.log(arg2)