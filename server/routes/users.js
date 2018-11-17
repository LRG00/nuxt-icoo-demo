const router = require('koa-router')()

router.prefix('/users')

router.get('/', function(ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
  // ctx.body = 'this is a users/bar response'
  ctx.body = {
    list: ['山东', '淄博']
  }
})

module.exports = router
