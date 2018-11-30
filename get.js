const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    ctx.body = {
        url: ctx.url,
        ctx_query: ctx.query,
        ctx_querystring: ctx.querystring,
        request_query: ctx.request.query,
        request_querystring: ctx.request.querystring
    }
})

app.listen(2000, () => {
    console.log('listen at port 2000!')
})