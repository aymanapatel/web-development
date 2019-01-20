# JSWorkFlow


## Development Web Server


Similar to Expor, we have BrowserSync dev server and LocalTunnel Remote Dev Environment
### Browser Sync 

### LocalTunnel

`lt --port 3000 --subdomain ayman`

Works on different devices.
Works on diffeent networks too.
Hot Reloading present

# Automation

## Grunt
- Configuration over Code
Which means tasks is written as a JSON file.

## Grunt
- Code over Configuration
Which means tasks are written as a JS File.

## npm scripts

### Pre/Post Hooks

In scripts object, pre(name) will run before (name) and likewise for post. Follows the convention.

# Transpiling

## Typescript

## Babel

### Configuration Styles

#### `.babelrc`
1. Not npm specific
2. Since it is isolated, it is easier to read.
#### `.package.json`
1. One less file 

# Bundling

## JSPM

## Browserify

- OG Bundler.
- Simple and limited.
## Rollup
## Webpack. For more detail check Pluralsight course [WebPack Fundamentals]()

1. Bundling of files
2. Perfomance
3. 

In Webpack, `bundle.js` (Found under DevTools) is the complete code to find for transpiled code.
### How to debug transpiled and bundle code?
*Using SourceMaps*
Maps code to original source.
SourceMaps only in DevTools, hence not delivered to users, minimising JS bundle cost.

# Linting

## Why Linting?

-  Enforce Consistency
    1. GLobals
    2. Trailing/ending commas
    3. Curly brace position
-  Avoid Mistakes
    1. Overwriting function
    2. Extra paranthesis
    3. Assignment in conditional statements
    4. Missing defalult case in SWITCH STATEMENT
    5. Accidental console.log 

## Linters

- JSLint
 - Highly opinionted
- JSHint
- ESLint


## ESLINT
ESLint is built for making your own decisions

1. Config Format?
2. Which built-in rules?
3. Warning or Errors?
4. Which plugins?
    - Based on framework
5. Use preset if you can't amke your own decision?

### 1. Config Format?

1. Seperate config file
`eslint.rc`
2. `package.json` file
    - `"eslintConfig":{"plugins:["example"],"env":{"example/custom"}:true}}`
### 2. Which built-in rules?
[List of available rules](https://eslint.org/docs/rules/)
### 3. Warning or Errors?
- Warning
    1. Can continue working
    2. Can be ignored
    3. Team must agree: Fix warnings
- Error
    1. Breaks build
    2. Cannot be ignored
    3. Team is forced to comply

### 4. Which plugins?
    - Based on framework
[List of ESLint configs, plugins etc](github.com/dustinspecler/awesome-eslint)

### 5. Use preset 
If you can't make your own decision, then use a **preset**.
But remember, presets brings OPINIONETED linting.


## Watching ESLint files
- eslint-loader
    1. Re-lint all files upon save
    2. Tied to **webpack**
- eslint-watch
    1. Not tied to **webpack**
    2. ESLint Wrapper which adds to file watch
    3. Better warning/error formatting
    4. Easily lints **Tests** and **build scripts**
    5. Displays clean message

## Linting experimental features

Supporting experimental JS features.
- Native ESLInt 
    - Supports ES5, ES6
    - Supports object space
- babel-eslint
    - Support experimental JS feature

## ESLint Workflow

- ESLint recommended rules.(Can configure according to your needs)
- eslint-watch
`esw`

## `.eslintrc.json`
`.eslintrc.json`:

- `rules.no-console:` (An example)
    1. For `0` : No output
    2. For `1` : Warning
    3. For `2` : Error

- `.js` files
- `/*eslint-disable-line <rule>*/`
    - Disable lint for that line and rule.
- `/*eslint-disabble <rule>*/`
    - Disable lint for that rule


# Testing

## Unit Testing Decisions

1. Framwork (Mocha)
2. Assertion Library (Chai)
3. Helper Libraries (JSDOM)
4. Where to run tests (Node)
5. Where to place tests (Alongside)
6. When to run tests (Upon save)

#### 1. Framwork
- Mocha
Mocha is more configurable than Jasmine
- Jasmine
- Tape
    - Simple and minimal
- QUnit
- AVA
    - New, runs **PARALLEL TESTS**
- Jest
    - Part of React community.
    - Wrapper over Jasmine, making it suitable for versatile usage.

#### 2. Assertion Library
Declare what you expect.
Mocha doesn't come with Assertions(Others do), so need to incorporate outside library.
- Chai
    -Best
- Should.js    
#### 3. Helper Libraries
1. JSDOM
    - Run DOM-related test without server
2. Cheerio
    - Query virtual DOM using jQuery selectors
#### 4. Where to run tests
1. Browsers
    - Karma, Testem
2. Headless browser (Browser without UI.)
    - PhantomJS (Runs V8 engine).
3. In-memory DOM
    - JSDOM (Faster htan PhantomJS)

#### 5. Where to place tests

| Centralized  | Alongside(Use this)| 
|---|---|
|  Less "noise" in src folder | Imports are easier since no lengthy directories |  
| Can remove in deployment if you want to | Clear visibility within Folder  | 
|   |  Convenient to open | 
||No recreating folder structure|
#### 6. When to run tests
- Rapid feedback
- Facilitates TDD
- Automated = Less friction
- Increases test visibility

# CI

## Travis CI
- Linux/Mac

## Appveyor
- Windows


# HTTP calls

## Approaches

1. Node
    -  http
    - requuest
2. Browser
    - XMLHTTPRequest
    - jQuery
        - `$.ajax`
    - Framework
    - fetch
        - Streamlined API. 
        - Limited feature set
3. Node & Browser
    - isomorphic-fetch
    -xhr (npm)
    - Supergiant
    - Axios (Popular)

## Centralize API call

Why?
- Configuring all calls
- Display loader (UI)
- Handle Errors
- Single Line of code for mocking API

## Polyfill

You can add polyfill script tag (polyfill.io) on top of iindex.html to add polyfill

## Mocking HTTP

Why?
- Unit testing
- Instant response
- Rapid prototyping
- Keep working when service is down
- Work offline
- Avoid inter-team bottlenecks

How?
- Nock
- Pointing **static JSON** to your API
- Crete dev webserver
    - api-mock
    - JSON server
    - JSON Schema faker (DYNAMIC data generation)
    - BrowserSync, Express .etc

Order of upfront work, realism and customization. 

(Low--> High)

Static JSON -> JSON server -> JSON Server + JSON Schema Faker -> Express

## Steps to MOCK
1. Declare schema
    - JSON Schema Faker
2. Generate Random Data
    - faker.js
    - chance.js
    - randexp.js
3. Serve Data via API
    - JSON server. (Doesn;t need HTTP but can still mock it)

## Randomized data is useful
Randomized catches real-world scenarios and edge cases
1. Empty lists
2. Long lists
3. Long values
4. Testing
5. Filtering
6. Sorting

# Project Structure To be done


# Production Build

## Initial steps
1. `webpack.config.prod`
Config for prod environment
2. `/dist` Server
Create `distServer.js` for prod
    - Remove webpack.config.dev dependencies
    - `app.use(compression());`
    - `app.use(express.static('dist'));`
3. In `baseUrljs`, have an option to toggle between API and mockAPI.
    Done using `useMockAPI` conditional statement.
        Note: `http://localhost:3000/?useMockApi=true` for mockAPI


## build scripts

In `package.json`, following are the build scripts-

    "clean-dist":"rimraf ./dist && mkdir /dist",
    "pre-build":"npm-run-all clea-dist test lint",
    "build":"babel-node buildScripts/build.js",
    "post-build":"babel-node buildScripts/distServer.js"
  
## Dynamic HTML Generation

Why?

- Reference bundles automatically
- Minify
- Handle dynamic bundle names
- Inject productional resources only.

## Bundle Splitting

Why?

- Speed intial page load
    By serving files that are needed
- Avoid re-downloading all libraries
    Serve what is required for framework


Usually we used `bundle.js` to bundle all of JS files.

Now, `bundle.js` is splitted to `main.js` and `vendor.js` READ MORE
- `main.js`
    JS files served at browser
- `vendor.js`
    JS files served and cached. 
## Cache Busting
To reduce bandwidth and avoid unnecessary HTTP requests, bust cache.
This provides to bring all builds to a timestamp by hashing the files files so that their name change when content changes. (git revert)

Why?
- Save HTTP Request
- Force request for latest version

How?
1. Handle bundle filename
2. Generate HTML dynamically

Steps
1. Import `webpack-md5-hash` in `webpack.config.prod.js`
2. Add `WebpackMd5Hash()`
3. Add `output.filename: '[name].[chunkhash].js'`

## CSS Bundling
We use [Extract Text Plugin](https://tinyurl.com/yblnff57).

It moves all the required `*.css` modules in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file `(styles.css)`. 
## Error logging

- Raygun
- New Relic
- TrackJS
- Sentry
Considerations

Error Metadata
    - Browser
    - Strack Trace
    - Previous Actiona
    - Custom API for enhanced tracking
Notifications and Integration
Analytics and Filtering 
Error logging is usually PAID Service.
Here we are using Track.js

Login into Track.js and  check log error


# Production Deploy
