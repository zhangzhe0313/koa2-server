/**
 * 在app.use(router)之前调用
 */
const responseFormatter = function() {
    return async function(ctx, next) {
        // 先去执行路由
        await next();

        ctx.body = {
            code: ctx.response.status,
            message: ctx.response.message,
            result: ctx.body
        }

        console.log(ctx.response.body)
    }
}

module.exports = responseFormatter