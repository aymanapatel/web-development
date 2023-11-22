export function printToFile(text: string, callback: ()=> void): void {
    console.log(text)
    callback()
}


type MutationFunction = (v: number)=> number

export function arrayMutate(numbers: number[], mutateFn: MutationFunction): number[] {
    return numbers.map(mutateFn)
}

console.log(arrayMutate([1,2,4], (v) => v*10))

export type AdderFunction = (val: number) => number;

export function closureAdder(num: number): AdderFunction {
    return (val: number) => num + val
}
/*
export function closureAdder(num: number): (val:number) => number {
    return (val: number) => num + val
}
*/


const addOne = closureAdder(1)
console.log(addOne(55))