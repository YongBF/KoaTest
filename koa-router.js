const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

const home = new Router();

home.get('/koa', async (ctx) => {
    ctx.body = 'router二级路由:' + ctx.querystring;
})

const router = new Router();
router
    .use('/router', home.routes(), home.allowedMethods())
    .get('/router', async (ctx) => {
        ctx.body = '一级路由';
    })

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(2000, () => {
        console.log('listen at port 2000')
    })
