const Users = require('../models/users')
// const User = require('../models/users')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const nodemailer = require('nodemailer')

module.exports.login = async function (req, res) {
  let email = req.body.email.toLowerCase()
  const candidate = await Users.findOne({ email: email })
  if (candidate) {
    //Пользователь сцществует
    const passwordResult = req.body.password == candidate.password
    if (passwordResult) {
      //Генерируем токен, пароли совпали
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id,
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      )
      //Отправляем токен
      res.status(200).send({
        token: `Bearer ${token}`,
        id: candidate._id,
      })
    } else {
      //Пароли не совпали
      res.status(401).send()
    }
  } else {
    //Пользователя нет
    res.status(404).send()
  }
}

module.exports.reg = async function (req, res) {
  let email = req.body.email.toLowerCase()
  const cand = new Users({
    email: email,
    password: req.body.password,
  })
  await cand.save()
  res.status(200).send('yes')
}

module.exports.forgotpass = async function (req, res) {
  let email = req.body.email.toLowerCase()
  const candidate = await Users.findOne({ email: email })
  if (candidate) {
    let transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: keys.email, // Почта здесь
        pass: keys.password, //здесь пароль
      },
    })

    let info = await transporter.sendMail({
      from: keys.email, // Еще почта
      to: `${candidate.email}`, // list of receivers
      subject: 'Ваш пароль', // Subject line
      html: `
      <h2>Ваш пароль сотрудника от галереи Метаморфоза<h2/>
      <h3>${candidate.password}<h3/>`,
    })
    res.status(200).send()
  } else {
    //Пароли не совпали
    res.status(404).send()
  }
}

module.exports.settings = async function (req, res) {
  console.log(req.body)
  await Users.updateOne({email: req.body.email}, {$set: {
    password: req.body.password,
  }})
}