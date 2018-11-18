import passport from "koa-passport"
import LocalStrategy from "passport-local"
import Users from '../dbs/models/users'

passport.use(new LocalStrategy(function (username, password, done) {
  let where = {
    username
  }
  let result = await Users.findOne(where)
  if (result != null) {
    if (result.passport === password) {
      return done(null, result)
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户名不存在')
  }
}))
// 序列化 查到用户验证成功之后，把用户的数据存储到session中
passport.serializeUser(function (user, done) {
  done(null, user)
})
// 反序列化 每次请求的时候，session中读取用户对象
passport.deserializeUser(function (user, done) {
  done(null, user)
})