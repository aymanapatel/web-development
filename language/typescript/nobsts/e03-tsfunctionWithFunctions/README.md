# Setup



1. `npm install ts-node typescript`
2. `npx tsc --init`: To getdefault `tsconfig.json`
3. To run single TS file, `npx ts-node index.ts`



# Types

## `type` vs `interface`


### Syntax Difference

1. `interface`

```
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
        
```

2. `type`

```
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
```

`type`: Same as `interface` excpet you cannot extend/add new variables after `type` is defined.


```
// Interface extension: Allowed
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// Type Extension: Not Allowed
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.
        
```
