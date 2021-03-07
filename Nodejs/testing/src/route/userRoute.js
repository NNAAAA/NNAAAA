const express = require('express')
const userRoute = express.Router()
const userController=require('../controller/user.controller.js')

userRoute.post('/store',userController.postSignUp)

userRoute.get('/',userController.signUp)

userRoute.get('/login',userController.signIn)
userRoute.get('/me',userController.checkUser)
module.exports=userRoute