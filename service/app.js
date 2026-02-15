import express from 'express'
import { postLogin } from './sevice.js'
import {midllware,writhTask,getAllMessages } from './sevice.js'

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

app.get("/api/status",midllware,(req,res)=>{
   res.json({"true":"ok"})
})

app.post("/api/messages",midllware,async(req,res)=>{
    const{token,task} = req.body
    const reslut = await writhTask(token,task)
    if(Object.keys(reslut)[0] === true){
        res.json(reslut)
    }else{
        res.status(400)
        res.json(reslut)
    }
})

app.get("/api/messages",midllware,async(req,res)=>{
    const {token} = req.body
    res.json(await getAllMessages(token))
})

app.listen(3000,()=>{
    console.log("server run");
})