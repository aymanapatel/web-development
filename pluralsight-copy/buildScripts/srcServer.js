import express from "express";

import path from "path";
import open from "open";

import webpack from 'webpack';
import config from '../webpack.config.dev';


/* eslint-disable no-console*/ //Removes no-console linting
var port = 3000;

var app = express(); //create instance of express

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../src/index.html"));
})

app.get("/users",(req,res)=>{
    res.json([
        {"id":1,"firstName":"alex","lastName":"Martin"},
        {"id":2,"firstName":"Bob","lastName":"Martin"},
        {"id":3,"firstName":"Jack","lastName":"Martin"}
    ])
})
app.listen(port,(err)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log("Open at port:" + port)
        open("http://localhost:" + port)
    }
});


// Webpack config in Express app
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath //Defined in webpack.config.dev.js
}))
