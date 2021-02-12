"use strict";
// File: typeOfTypes.ts
//=============any=============
// tag::anyType[]
let any_a = 666; // type: any
let any_b = ['danger']; // type: any
let any_c = any_a + any_b; // type: any
// end::anyType[]
// tag::compileErroranyType[]
let no_any_a = 666;
let no_any_b = ['danger'];
let no_any_c = no_any_a + no_any_b; // Operator '+' cannot be applied to types 'number' and 'string[]'.ts(2365)
// end::compileErroranyType[]
//=============unknown=============
//tag::unknowntypeusage[]
let myVar;
let myVar1 = myVar; // No error
let myVar2 = myVar; // No error
let myVar3 = myVar; // Type 'unknown' is not assignable to type 'boolean'
if (typeof myVar1 == "boolean") {
    let myVar4 = myVar;
}
//end::unknowntypeusage[]
//=============boolean=============
//tag::booleantype[]
let boolean_a = true; // boolean
var boolean_b = false; // boolean
const boolean_c = false; // true
let boolean_d = true; // boolean
let boolean_e = true; // true: Type literal
let boolean_f = false; // Type 'false' is not assignable to type 'true'.ts(2322)
//end::booleantype[]
//=============number=============
//tag::numbertype[]
let number_a = 1234;
let number_b = Infinity * 0.10;
const number_c = 1234;
console.log(typeof number_a);
console.log(typeof number_b);
console.log(typeof number_c);
//end::numbertype[]
//# sourceMappingURL=typesofTypes.js.map