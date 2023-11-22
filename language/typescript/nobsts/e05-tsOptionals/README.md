# Setup



1. `npm install ts-node typescript`
2. `npx tsc --init`: To getdefault `tsconfig.json`
3. To run single TS file, `npx ts-node index.ts`



## Optionals `?`

> `?` keyoword

### Optional Parameters

Limitations: "A required parameter cannot follow an optional parameter"

That is, 

```
function(someOptional?:string) // ✅
function(someOptional?:string, required: string) // ❌ required cannot come after someOptional

```





## Coerce Operator `!`

> ❌ Similar to `!` in CSS, this is a hack and should be used seldomly

