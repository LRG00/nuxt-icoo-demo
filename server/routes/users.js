const router = require('koa-router')()
// 引入user models
const Users = require('../dbs/models/users')
const Redis = require('koa-redis')
import axios from '../utils/axios'
// const Store = new Redis().client
// const st = await Store.hset('fix','name',Math.random())
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
