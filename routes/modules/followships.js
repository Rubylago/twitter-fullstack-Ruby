const express = require('express')
const router = express.Router()
const userController = require('../../controller/userController')

router.post('/', userController.addFollowing)
router.post('/:id', userController.addFollowing)
router.delete('/:id', userController.removeFollowing)

module.exports = router
