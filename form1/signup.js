const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const mongoose=require("mongoose");
mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/loginDB",{useNewUrlParser:true,useUnifiedTopology:true})

const loginSchema=new mongoose.Schema({
    nam:String,
    pass:String
});
const Login=mongoose.model("Login",loginSchema);

app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static(__dirname+"/public1"));
app.listen(3000,function(){
    console.log("hereeeeee");
});
app.get("/",function(req,res){
  res.sendFile(__dirname + "/" + "trial.html");
});
// app.get("/css",function(req,res){
//   res.sendFile(__dirname + "/" + "signup.css");
// });
// app.get("/jsp",function(req,res){
//   res.sendFile(__dirname + "/" + "signup.js");
// });
// app.get("/",function(req, res) => res.send("Response from the GET request"));

app.post("/",function(req,res){
    console.log(req.body);
    const login=new Login({
        nam:req.body.nam,
        pass:req.body.pass
    });
    login.save();
});
