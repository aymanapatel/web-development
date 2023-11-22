# Setup



1. `npm install ts-node typescript`
2. `npx tsc --init`: To getdefault `tsconfig.json`
3. To run single TS file, `npx ts-node index.ts`



# Types

1. `any`: Control types. `any` is the default which should be changed.


> Remember to have `es2015` target since Promise and other latest features are not supported in ES5


# Type-checking

> Typechecking is ALWAYS compile-time


# Optional Chaining and Null coalesing (ES Concepts)


## Optional Chaining

The `?.` operator is like the `.` chaining operator, except that instead of causing an error (Throwing Error object) if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

```javascript
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog.name;
console.log(dogName);
// expected output: Error: Cannot read property 'name' of undefined

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined
```


## Nullish Coalesing


```
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
```



