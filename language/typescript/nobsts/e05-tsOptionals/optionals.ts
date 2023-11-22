function printIngrediant(quantity: string, ingrediant: string, extra?: string) {

    let optionalIngrediant = extra ?? ""
    console.log(`${quantity} ${ingrediant} ${optionalIngrediant}`)
}

printIngrediant("1C", "Flour")
printIngrediant("1C", "Flour", "More")

interface User {
    id: string,
    info?: {
        email?: string
    }
}

function getEmail(user:User): string {

    if(user.info) {
        // return user.info.email // ❌ Type 'string | undefined' is not assignable to type 'string'. Type 'undefined' is not assignable to type 'string'.ts(2322)
        return user.info.email! // ⚠️Coresion is a HACK. See `getEmailEasy`
    }

    return ""
}


function getEmailEasy(user:User): string {  
    return user.info?.email ?? ""
}


function addWithCallBack(x: number, y: number, callback: (num: number) => void) {
    console.log([x,y])
    callback(x)
}

function addWithCallBackOptional(x: number, y: number, callback?: (num: number) => void) {
    console.log([x,y])
    callback?.(x)
}


console.log(addWithCallBack(1, 2, (x) => console.log(x)))
console.log(addWithCallBackOptional(1, 2))


