//获取用户
exports.getUser = async (ctx, next) => {
  if ('test' == ctx.request.body.account) {
    ctx.body = {
      username: '测试',
      age: 30
    }
  }
}
