import  express  from "express";
import jwt  from "jsonwebtoken";
import { secret } from "./credentials";
import { auth } from "./middleware";
const app=express();

app.use(express.json());

app.post('/signup',(req,res)=>{
    const {username,password}=req.body;
    console.log(username);

    return res.json({message:"you sign up"})
    
})

app.post('/signin',(req,res)=>{
    const {username,password}=req.body;
    console.log(username);
   const token= jwt.sign({username},secret);
    return res.json(token)
    
})

app.get('/hi',auth,(req,res)=>{
    return res.json({message:'hi'});
})

app.listen(3002);