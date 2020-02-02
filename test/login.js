const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db.js');
const app = express();

// 启动静态资源服务
app.use('/',express.static('public'));

// 挂载参数处理中间件
app.use(bodyParser.urlencoded({ extended:false }));

app.post('/check',(req,res)=>{
	let param = req.body;
	
	let sql = 'select count(*) as total from login where username = ? and password = ?';
	let data = [param.username,param.password];
	// console.log(param);
	db.base(sql,data,(results)=>{
		// console.log(results);
		if(results[0].total == 1){
			res.send("login success");
		}
		else {
			res.send("login faild");
		}
	});
});

app.listen(3000,()=>{
	console.log('running...');
})