const exp = require("constants");
const express = require("express");

const app = express();

app.use("/estatico",express.static(__dirname + '/pages'));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/pages/home.html")
})
app.get("/",function(req,res){
    res.sendFile(__dirname + "/pages/estilohome.css")
})
app.get("/login",function(req,res){
    res.sendFile(__dirname + "/pages/login.html")
})

app.listen(3333,function(){
    console.log("Rodando...")
})