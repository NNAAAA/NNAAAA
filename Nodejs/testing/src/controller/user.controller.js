

const User=require('../model/user')
class UserController{
  //[GET] /user/create
  signUp(req, res, next){
    // User.find({},(err,data)=>{
    //   if (!err) res.json(data)
    // })
    res.render('./views/user/signUp')
  }

  //[POST] /user/store
  postSignUp(req, res, next){
    const Userr=new User(req.body)
    Userr.save()
    res.redirect('/user/login')
  }

  //[GET] /user/login
  signIn(req, res, next){
    res.render('./views/user/signIn.pug')
    next()
  }

  //[GET] /user/me
  checkUser(req, res, next){
    User.findOne(req.query,(err,user)=>{
      res.render('./views/home',{
        user
      })
    })
  }
}

module.exports = new UserController()