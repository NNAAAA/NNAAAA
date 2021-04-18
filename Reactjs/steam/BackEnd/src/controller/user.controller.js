const express=require('express')
const User= require('../models/user')
class UserController{
    //[POST]  /user/register
    postRegister(req, res, next){
        const user=new User(req.body)
        console.log(req.body)
    	user.save()
        res.redirect('/user/login')
    }
}
module.exports=new UserController()