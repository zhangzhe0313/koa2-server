//获取用户
exports.getUser = async (ctx, next) => {
  ctx.body = {
      username: '测试',
      age: 30
  }
}
