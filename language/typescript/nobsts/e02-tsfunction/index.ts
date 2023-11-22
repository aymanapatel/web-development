let userName = "jack"
let hasLoggedIn = true

// hasLoggedInError += "hi"

/**
 *  1. Simple Types
 *      - number
 *      - RegExp
 *      - ...
*/

let myNumber: number = 10

let myRegex: RegExp = /ayman/


const names: string[] = userName.split(" ")

const myValues: Array<number> = [1, 2, 3]

/**
 *  2. Object types
 *  TO avoid cumbersome code, you can use interface to to be reused in your object defn.
*/
const myPersonObject = {
    first: "Ayman",
    last: "Patel"
}

const myPersonObjectWithTypes: {
    first: string
    last: string
    isCool: boolean
} = {
    first: "Ayman",
    last: "Patel",
    isCool: true
}


interface Person {
    first: string
    last: string
    isCool: boolean
}

const myPersonObjectWithInterfaceTypes: Person = {
    first: "Ayman",
    last: "Patel",
    isCool: true
}

/**
 * 3. Record: One of Utility type
 *      - If you want to add 
 */

const idsWithoutRecords = {
    10: "a",
    20: "b"
}

idsWithoutRecords[30] = "c" 
// Element implicitly has an 'any' type because expression of type '30' can't be used to index type '{ 10: string; 20: string; }'.
// Property '30' does not exist on type '{ 10: string; 20: string; }'.

const idsWithRecords: Record<number, string> = {
    10: "a",
    20: "b"
}

idsWithRecords[30] = "c" 


// 4. Loops: TS infers types from map, filter, reduce

const correctLoopType: string[] = [4,5,6].map((v) => `${v*10}`)
const wrongLoopType: number[] = [4,5,6].map((v) => `${v*10}`)