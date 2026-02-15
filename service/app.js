import express from 'express'
import { postLogin } from './sevice.js'

const app = express()

app.use(express.json())

app.post("/api/login",async(req,res)=>{
   const user = req.body
   const resut = await postLogin(user)
   if(Object.keys(resut)[0] !== "token"){
    res.status(400)
    res.json(resut)
   }else{
    res.json(resut)
   }
})

app.get("",(req,res)=>{

})

app.put("",(req,res)=>{

})

app.delete("",(req,res)=>{

})

app.listen(3000,()=>{
    console.log("server run");
})