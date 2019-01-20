import express from "express";

import path from "path";
import open from "open";
import compression from 'compression';



/* eslint-disable no-console*/ //Removes no-console linting
var port = 3000;
var app = express(); //create instance of express

app.use(compression());
app.use(express.static('dist'));




app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../src/index.html"));
})

app.get("/users",(req,res)=>{
    //Hard coding. Can add Dynamic content
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

