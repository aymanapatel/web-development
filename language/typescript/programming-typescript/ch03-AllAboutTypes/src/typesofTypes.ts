// File: typeOfTypes.ts

//=============any=============
// tag::anyType[]
let any_a: any = 666            // type: any
let any_b: any = ['danger']     // type: any
let any_c: any = any_a + any_b  // type: any
// end::anyType[]

// tag::compileErroranyType[]
let no_any_a = 666            
let no_any_b = ['danger']     
let no_any_c = no_any_a + no_any_b // Operator '+' cannot be applied to types 'number' and 'string[]'.ts(2365)
// end::compileErroranyType[]


//=============unknown=============
//tag::unknowntypeusage[]
let myVar: unknown;
let myVar1: unknown = myVar;   // No error
let myVar2: any = myVar;       // No error
let myVar3: boolean = myVar;   // Type 'unknown' is not assignable to type 'boolean'

if( typeof myVar1 == "boolean") {
    let myVar4 = myVar
}
//end::unknowntypeusage[]


//=============boolean=============
//tag::booleantype[]
let boolean_a = true            // boolean
var boolean_b = false           // boolean
const boolean_c = false         // true
let boolean_d : boolean = true  // boolean
let boolean_e : true = true     // true: Type literal
let boolean_f : true = false    // Type 'false' is not assignable to type 'true'.ts(2322)
//end::booleantype[]


//=============number=============
//tag::numbertype[]
let number_a = 1234
let number_b = Infinity * 0.10
const number_c  = 1234
let number_d : number = 1234
let number_e : 1234.12 = 1234.12
let number_f : 1234.12 = 12 // Type '12' is not assignable to type '1234.12'.ts(2322)
//end::numbertype[]


//=============string=============
//tag::stringtype[]
let string_a = 'ayman'
let string_b = 'billy'
const string_c  = 'chinmay'
let string_d : string = 'zoom'
let string_e = string_a + ' ' + string_b + string_c
let string_f : 'john' = 'zoe' // Error TS2322: Type 'zoe' is not assignable to type 'john'.ts
//end::stringtype[]


//=============symbol=============
//tag::symboltype[]
let symbol_a = Symbol('a')                // symbol
let symbol_b: symbol = Symbol('b')        // symbol
var symbol_c = symbol_a === symbol_b      // boolean
let symbol_d = symbol_a + 'x'             // Error TS2469: The '+' operator cannot be applied to type 'symbol'.
const symbol_e = Symbol('e')              // typeof e
const symbol_f: unique symbol = Symbol('f') // typeof f
let symbol_g: unique symbol = Symbol('f')// Error TS1332: A variable whose type is a 'unique symbol' type must be 'const'.
let symbol_h = symbol_e === symbol_e     // boolean
let symbol_i = symbol_e === symbol_f     // Error TS2367: This condition will always return 'false' since the types 'unique symbol' and 'unique symbol' have no overlap.
//end::symboltype[]