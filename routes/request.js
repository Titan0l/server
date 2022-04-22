const express = require('express')
const controller = require('../controllers/request')
const router = express.Router()
const passport = require('passport')

router.get('/',controller.get)


module.exports = router
