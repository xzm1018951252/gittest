// 图书管理系统
const express = require('express');
const router = require('./router.js');
const path = require('path');
const template = require('art-template');
const bodyParser = require('body-parser');
const app = express();

// 启动静态资源服务
app.use('/www',express.static('public'));

// 设置模板引擎
// 使express兼容art-template
app.engine('html', require('express-art-template'));
// 设置模板引擎路径
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎
app.set('view engine', 'html');

//处理请求参数
// 挂载参数处理中间件
app.use(bodyParser.urlencoded({ extended:false }));
// 处理json参数
app.use(bodyParser.json());

// 启动服务器功能
// 配置路由
app.use(router);
// 监听端口
app.listen(3000,()=>{
	console.log('running...');
})