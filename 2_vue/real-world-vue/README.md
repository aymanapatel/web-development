# Real-World Vue

## Vue CLI

> Full system for rapid Vue.js development.

- Configuration using Webpack under the hood.

- CLI enables HMR (Hot module replacement)

### Installation:

```
npm install -g @vue/cli 
// or
yarn global add @vue/cli
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Vue UI

> Run `vue ui`. It is so useful!


## Code


### Root components and application code

- `index.js`: Root component
- `App.vue` : Root application code


```

```



### Anatomy of a Single File Component (`*.vue` file)

There are three things in a VUe component

1. `<template>` : Structure
2. `<script>`   : Brain
3. `<style>`    : Looks

```html

<template>
    <p> {{total}} </p>
    <button @click="total +-1">Increment</button>
</template>   

<script>
    export default {
        data() {
            return {
                total: 0
            }
        }
        /**
         *  Can have components too
         *  name: "Component name",
         *  component: {
         *      HelloWorlds
         *  }
        */
    }
</script>
    
<style>    
    p {
        font-size: 10px;
    }
</style>    

```

### Scoped CSS

> Add "scoped" attribute to limit CSS to this component only

```css
<style scoped>
p {
    font-size: 10px;
}
</style>
```