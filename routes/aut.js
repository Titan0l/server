const express = require('express')
const controller = require('../controllers/aut')
const router = express.Router()

router.post('/', controller.login)
router.post('/reg', controller.reg)
router.post('/settings', controller.settings)
router.post('/forgotpass', controller.forgotpass)
module.exports = router
