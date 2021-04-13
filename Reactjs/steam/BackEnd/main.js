const express=require('express');
const app=express();
const port=4000;

app.use(express.urlencoded({extended:true}))

app.get('/',(res,req)=>{
    req.send("hello")
})

app.listen(port,()=>{
    console.log("Something oke");
})