# Setup



1. `npm install ts-node typescript`
2. `npx tsc --init`: To getdefault `tsconfig.json`
3. To run single TS file, `npx ts-node index.ts`



## Types

1. `unknown`
- It is `any` but need to typecast (using `as`) it if using it. aka Safe `any`

```
let x: unknown

// `as` is called Type Assertion
let arg1 = x as number
let arg2: ...(x as Coordinate)
```

2. Optional `?`

  - `arg2?: string`

## Function Overloading


