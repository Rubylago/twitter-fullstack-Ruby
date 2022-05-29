const express = require('express')
const router = express.Router()
const { authenticated } = require('../middleware/auth')
const { generalErrorHandler } = require('../middleware/error-handler')
const passport = require('../config/passport')

const admin = require('./modules/admin')
const tweets = require('./modules/tweets')
const users = require('./modules/users')
const followships = require('./modules/followships')

const userController = require('../controller/userController')
const apiController = require('../controller/apiController.js')

// Admin
router.use('/admin', admin)

// 使用者登入
router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)

// 使用者註冊
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/logout', userController.logout)

// tweets
router.use('/tweets', authenticated, tweets)

// followships
router.use('/followships', authenticated, followships)

// user
router.use('/users', authenticated, users)

// api
router.get('/api/users/:id', apiController.editUser)
router.post('/api/users/:id', apiController.putUser)

router.get('/', (req, res) => res.redirect('/tweets'))
router.use('/', generalErrorHandler)

module.exports = router
