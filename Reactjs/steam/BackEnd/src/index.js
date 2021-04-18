const express=require('express')
const app= express()
const port=4000;
const cors=require('cors')

const db= require('./config/db/mongoose')
db.connect()

app.use(express.urlencoded({ extended: true }))
const userRoute=require('./route/userRoute')

app.set('view engine', 'pug')
app.set('views','./src')

app.use(cors())

app.get('/',(res,req)=>{
    req.send("BackEnd")
})

app.use('/user',userRoute);
// app.get('/user/register',(res,req)=>{
//     req.render('./views/register.pug')
// })

app.listen(port,()=>{
    console.log(`BackEnd at port ${port}`)
})