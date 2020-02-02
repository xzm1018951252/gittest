// 把data数据拼接成insert语句
const path = require('path');
const fs = require('fs');
fs.readFile(path.join(__dirname,'../','data.json'),'utf8',(err,content)=>{
	if(err) {
		console.log(err);
		return;
	}
	let list = JSON.parse(content);
	let arr = [];
	list.forEach((item) =>{
		let sql = `INSERT INTO book (name,author,category,description) VALUES ('${item.name}','${item.author}','${item.category}','${item.desc}');`
		arr.push(sql);
	});
	fs.writeFile(path.join(__dirname,'data.sql'),arr.join(''),'utf8',(err) => {
		console.log('data get');
	});
});