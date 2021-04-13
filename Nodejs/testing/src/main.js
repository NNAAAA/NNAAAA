const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const db=require('./config/db/index') 
db.connect()

app.use(express.urlencoded({ extended: true }))

const userRoute=require('./route/userRoute')

app.set('view engine', 'pug')
app.set('views','./src')

app.get('/', (req, res) => {
  res.render('./views/home.pug')
})

app.use('/user',userRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})