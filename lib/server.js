const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const path = require('path');
import koaRouter from 'koa-router';
// const debug = require('debug')('app:server')
// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import Ssr from './entry_server'
import { readFileSync, readFile } from 'fs';


const getFile = (pathname) => {
    return new Promise((resolve, reject) => {
        readFile(pathname, 'utf8', (e, data) => {
            if(e) {
                console.log(e);
                reject(e);
            } else {
                data = JSON.parse(data);
                console.log(data);
                resolve(data);
            }
        });
    });
};


const router = koaRouter();

app.use(cors({
    origin: function(ctx) {
        if(ctx.headers.origin === 'http://0.0.0.0:1212') {
            //www.ijosser.com:2222 || ip:2222
            return '*';
        }
        // return false;
        return '*';
    },
    exposeHeaders: [ 'WWW-Authenticate', 'Server-Authorization' ],
    maxAge: 5,
    credentials: true,
    // allowMethods: ['GET', 'POST', 'DELETE'],
    // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));


router.get('/dist/*', async ctx => {
    if(ctx.path.indexOf('.css') !== -1) ctx.type = 'text/css';
    if(/(gif|png|jpeg|jpg?g)$/.test(ctx.path)) ctx.type = 'image/jpeg';
    ctx.body = readFileSync('.' + ctx.path);
});

router.get('/src/assets/*', async ctx => {
    if(/(gif|png|jpeg|jpg?g)$/.test(ctx.path)) ctx.type = 'image/jpeg';
    ctx.body = readFileSync('.' + ctx.path);
});

router.get('/api/getPageList', async ctx => {
    console.log('get page');
    const resData = {};
    
    const { time } = ctx.request.query;
    if(!time) {
        resData.code = 300;
        resData.msg = 'request error';
        ctx.body = resData;
        return;
    }

    const pageListData = ctx.state.pageData;
    const listData = pageListData[time];
    const { length } = listData;

    resData.code = 200;
    resData.data = Array.from(listData);

    resData.pageInfo = {
        pageTotal: length,
    };

    ctx.body = {
        resData,
    };
});

router.get('/api/getList', async ctx => {
    console.log('getList');
    const { journal } = ctx.request.query;
    const pageListUrl = path.join(__dirname, `../parsePage/${journal}-pageList.json`);
    const pageListData = await getFile(pageListUrl);

    ctx.body = {
        resData: {
            pageListData,
            code:200,
        },
    };
});

router.get('/api/currentPage', async ctx => {
    // const pageListData = ctx.state.pageListData;
    const { journal } = ctx.request.query;
    const pageListUrl = path.join(__dirname, `../parsePage/${journal}-pageList.json`);
    const pageUrl = path.join(__dirname, `../parsePage/${journal}-page.json`);
    const pageListData = await getFile(pageListUrl);
    const pageData = await getFile(pageUrl);
    const { currentTime, data, firstTime } = pageListData;
    let resData = {};
    
    const year = currentTime.split('-')[0];
    const volume = year - firstTime.split('-')[0] + 1;
    let currentYearNumber = 0;
    for(let i in data) {
        if(i.match(year)) {
            currentYearNumber++;
        }
    }

    const listData = pageData[currentTime];

    resData.code = 200;
    resData.data = Array.from(listData);
    ctx.body = {
        resData,
        time: currentTime,
        volume,
        currentYearNumber,
    };
});

router.get('*', async ctx => {
    ctx.type = 'html';
    ctx.body = readFileSync('./dist/index.html');
});



app.use(router.routes());
app.use(router.allowedMethods());
console.log('listen 2222');
app.listen(2222);
