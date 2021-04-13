const mongoose=require('mongoose')
async function connect(){
  try{
      await mongoose.connect('mongodb://localhost:27017/NguyenAnh', {
          useNewUrlParser: true,
          useUnifiedTopology:true,
          useFindAndModify: true,
          useCreateIndex: true
      });
      console.log('connect success')
  }
  catch (err){
    console.log("co loi")
  }
}
module.exports = { connect }