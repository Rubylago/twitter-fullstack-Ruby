const { User } = require('../models')
const helpers = require('../_helpers')
// 右側Top10User

async function topUsers (req) {
  const users = await User.findAll({
    where: { isAdmin: false },
    attributes: ['id', 'name', 'account', 'avatar'],
    include: { model: User, as: 'Followers' }
  })
  const topUsers = users
    .map(user => {
      return user.get({ plain: true })
    })
    .map(u => {
      return {
        ...u,
        Followers: u.Followers.length,
        isFollowed:
              helpers.getUser(req) &&
              helpers.getUser(req).Followings &&
              helpers.getUser(req).Followings.some(f => f.id === Number(u.id))
      }
    })
    .sort((a, b) => b.Followers - a.Followers)
    .slice(0, 10)
  return topUsers
}

module.exports = {
  topUsers
}
