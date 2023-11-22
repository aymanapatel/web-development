# React Hooks

Libraries that use Hooks

1. React Router
2. Relay
3. Apollo
4. ....

## Links

> Directly import using Code Sandbox [here](https://codesandbox.io/s/github/aymanapatel/react-hooks)

> Course link [Linked Learning](https://www.linkedin.com/learning/react-hooks/understanding-modern-react)

1. [useHooks.com](useHooks.com)
2. [React Documentation](https://reactjs.org/docs/hooks-intro.html)

## `useState`

### Syntax

```
const result = useState("Jan");
console.log(result);
```

`console` output

```
(2) [undefined, ƒ bound dispatchAction()]
0: "Jan"
1: ƒ bound dispatchAction() {}
<constructor>: "Function"
name: "Function"
```

Two Outputs:

1. State Variable

2. function (binds `dispatchAction`)

## `useEffect`

> Allows you to perform side effects such as interact with DOM element such as history API etc.

Traditionally, `useEffect` run after each render.

### Syntax

#### 1.Without dependecy array

```
useEffect(() = > {
  document.title = `Hello Ayman`
});
```

- Giving it no second argument acts as both componentDidMount and componentDidUpdate, as in it runs first on mount and then on every re-render.

#### 2. With dependecy array

```
useEffect(() = > {
  document.title = `Hello Ayman`
}, []);
```

- Giving it an empty array acts like `componentDidMount` i.e., it only runs once.

#### 3. With dependecy array

```
useEffect(() = > {
  document.title = `Hello Ayman`
}, [name]);
```

- Giving it an array as second argument with any value inside, eg , `[name]` will only execute the code inside your `useEffect` hook ONCE on mount, as well as whenever that particular variable (`variable1`) changes.

## Use case

1. Fetch data from an API

## `useReducer`

```
useReducer(function f, intial State)
```

## `useRef`

> Allows to go to a component and find its value. Extrememly powerful for FORMS

No input arguments.

Example

```
const elementRef = useRef();

...
<input onSubmit={someEvent} ref={elementRef}> // bind to this <input> tag

const someEvent = (event) => { const elementRefVal = elementRef.current.value}


```

## Custom Hooks

## Fetch Component
