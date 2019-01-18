import express from "express";

import path from "path";
import open from "open";

var port = 3000;

var app = express(); //create instance of express

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../src/index.html"));
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
