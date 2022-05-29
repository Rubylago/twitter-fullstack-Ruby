const express = require('express')
const router = express.Router()
const tweetController = require('../../controller/tweetsController.js')
const userController = require('../../controller/userController')

// 推文 LIKE 功能
router.post('/:tweetId/like', userController.addLike)
router.post('/:tweetId/unlike', userController.removeLike)

// 推回文 功能
router.post('/:tweetId/replies', tweetController.addReply)
router.post('/', tweetController.addTweet)

// 推回文頁面
router.get('/:tweetId/replies', tweetController.getTweet)
router.get('/', tweetController.getTweets)

module.exports = router
