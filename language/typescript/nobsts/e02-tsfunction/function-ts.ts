// addNumber: (a: number, b: number) => number
const addNumber = (a: number, b: number): number => {
    return a+b;
}
export default addNumber


// printFunction: (param1: number, param2: number) => void
export const printFunction = (param1: number, param2: number) => {
    console.log(`- Simple Print Function  ${addNumber(param1, param2)}`)
}



// addString: (str1: string, str2?: string) => string
export const addString = (str1: string, str2:string ="") : string => `${str1} ${str2}`

// addWithUnionType: (str1: string, param: string | number) => string
export const addWithUnionType = (str1: string, param:string | number): string => `${str1} ${param}`


// promiseFetchData: (url: string) => Promise<string>
export const promiseFetchData = (url: string) => Promise.resolve(`Data from ${url}`)

// introduce: (salutation: string, ...names: string[]) => strin
export const introduce = (salutation: string, ...names: string[]): string  => {
    return `${salutation} ${names.join(' ')}`
}

// getName: (user: {first: string, last: string}) => string
export const getNameUnsafe = ( user: {first: string, last: string}): string => {
    return `${user.first} ${user.last}`
}



// getNameOptional: (user: {first: string, last: string}) => string
export const getNameOptional = ( user: {first: string, last: string}): string => {
    return `${user?.first} ${user?.last}`
}


// getNameOptionalAndNullCoalescing: (user: {first: string, last: string}) => string
export const getNameOptionalAndNullCoalescing = ( user: {first: string, last: string}): string => {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`
}


// module.exports = addNumber; Typescript does not allow module exports