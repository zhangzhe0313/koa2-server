const router = require('koa-router')()

var auth_ctrl = require('../../cotrollers/auth-ctrl')

// auth
router.get('/api/auth/getUser', auth_ctrl.getUser)


module.exports = router
