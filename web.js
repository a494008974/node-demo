const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const template = require('./core/template');
const controller = require('./core/controller');
const app = new Koa();
const isProduction = process.env.NODE_ENV === 'production';

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// static file support:

if (! isProduction) {
    let staticFiles = require('./core/public');
    app.use(staticFiles('/public/', __dirname + '/public'));
    app.use(staticFiles('/build/', __dirname + '/build'));
}

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
app.use(template('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');