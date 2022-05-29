const express = require('express')
const router = express.Router()
const { authenticatedAdmin } = require('../../middleware/auth')
const passport = require('../../config/passport')
const adminController = require('../../controller/adminController')

router.get('/signin', adminController.signinPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/admin/signin', failureFlash: true }), adminController.signIn)
router.get('/tweets', authenticatedAdmin, adminController.getTweets)
router.delete('/tweets/:id', authenticatedAdmin, adminController.deleteTweets)
router.get('/users', authenticatedAdmin, adminController.getUsers)

module.exports = router
