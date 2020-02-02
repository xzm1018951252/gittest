const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mybook'
});
 
connection.connect();
 
 let sql = 'insert into book set ?';
 let data = {
	 name:'一本书',
	 author:'作者',
	 category:'文学',
	 description:'描述'
 }
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();