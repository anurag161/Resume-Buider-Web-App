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
app.use(express.static(__dirname+"/public"));
app.listen(3000,function(){
    console.log("hereeeeee");
});
app.post("/",function(req,res){
    console.log(req.body);
    const login=new Login({
        nam:req.body.nam,
        pass:req.body.pass
    });
    Login.find(function(err,logins){
      if(err){
        console.log(err);
      }else{
        console.log(logins);

      }
      logins.forEach(function(login){
        if(login.nam===req.body.nam && login.pass===req.body.pass){
          console.log("doneeeeeeeeeeeeeeeee")
        }
      })
    });
    login.save();
});
