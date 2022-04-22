const { Schema, model } = require('mongoose')
const schema = new Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  status: String,
})

module.exports = model('request', schema)
