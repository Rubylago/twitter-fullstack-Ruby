const express = require('express')
const router = express.Router()
const upload = require('../../middleware/multer')
const userController = require('../../controller/userController')

// 帳戶設定
router.get('/:id/setting', userController.editUserPage)
router.put('/:id/setting', userController.editUser)

// 編輯 user 資料
router.post('/:id/edit', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), userController.editUser)

// 查看 user 相關頁面
router.get('/:id/followings', userController.getFollowings)
router.get('/:id/followers', userController.getFollowers)
router.get('/:id/tweets', userController.getUser)
router.get('/:id/replies', userController.getReplies)
router.get('/:id/likes', userController.getLikes)
router.get('/:id', userController.getUser)

// 防呆路由
router.get('/', (req, res) => res.redirect('/tweets'))

module.exports = router
