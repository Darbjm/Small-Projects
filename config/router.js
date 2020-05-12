const router = require('express').Router()
const users = require('../controllers/message')


router.route('/message')
  .post(users.message)

module.exports = router