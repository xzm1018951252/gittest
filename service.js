// 业务
// const data = require('./data.json');
const path = require('path');
const fs = require('fs');
const db = require('./db.js');
//图书编号
let maxBookCode = (data)=>{
	let arr = [];
	data.forEach((item) => {
		arr.push(item.id);
	});
	return Math.max.apply(null,arr);
}

// 渲染主页面
exports.showIndex = (req,res) => {
	let sql = 'select * from book';
	db.base(sql,null,(result) => {
		res.render('index',{list: result});
	});
}
// 跳转添加页面
exports.addBook = (req,res) => {
	res.render('addBook',{});
}
// 添加图书保存数据
exports.subBook = (req,res) => {
	// 获取表单数据
	let info = req.body;
	let book = {};
	for(let key in info){
		book[key] = info[key];
	}
	let sql = 'insert into book set ?';
	db.base(sql,book,(result) => {
		res.redirect('/');
	})
	// book.id = maxBookCode(data) + 1;
	// data.push(book);
	// // 把内存中的数据写入
	// fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
	// 	if(err){
	// 		res.send("服务器错误");
	// 		console.log(err);
	// 		return;
	// 	}
	// 	res.redirect('/');
	// })
}

// 跳转修改图书页面
exports.toEditBook = (req,res) => {
	let id = req.query.id;
	// let book = {};
	// for(k in data){
	// 	if(data[k].id == id){
	// 		book = data[k];
	// 		break;
	// 	}
	// }
	let sql = 'select * from book where id= ?';
	db.base(sql,[id],(result)=>{
		res.render('editBook',result[0]);
	});
	// res.render('editBook',book);
}
// 编辑图书修改数据
exports.editBook = (req,res) => {
	let info = req.body;
	let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
	let data = [info.name,info.author,info.category,info.description,info.id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows == 1){
			res.redirect('/');
		}
	});
	// data.forEach((item)=>{
	// 	if(item.id == info.id){
	// 		for(let k in info){
	// 			item[k] = info[k];
	// 		}
	// 		return;
	// 	}
	// });
	// // 把内存中的数据写入
	// fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
	// 	if(err){
	// 		res.send("服务器错误");
	// 		console.log(err);
	// 		return;
	// 	}
	// 	res.redirect('/');
	// })
}
exports.deleteBook = (req,res) => {
	let id = req.query.id;
	// let book = {};
	// for(k in data){
	// 	if(data[k].id == id){
	// 		book = data[k];
	// 		break;
	// 	}
	// }
	let sql = 'delete from book where id= ?';
	db.base(sql,[id],(result)=>{
		res.redirect('/');
	});
}