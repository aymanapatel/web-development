

//Register babel to transpile for tests run
require('babel-register')();


// Disable Webpack features that Mocha doesn't understand (CSS file)
require.extensions['.css'] = function(){} //IF CSS, treat it as empty function
