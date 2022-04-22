const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
const bodyParser = require('body-parser')
const autRoutes = require('./routes/aut')
const request = require('./routes/request')

const app = express()
const keys = require('./config/keys')
mongoose
  .connect(keys.mongoURL)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: '*',
  })
)


app.use('/', request)

app.use(express.static('uploads'))

module.exports = app
