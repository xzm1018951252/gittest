const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mybook'
});
 
connection.connect();
 
 let sql = 'delete from book where id=?';
 let data = [9];
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows == 1){
	  console.log("删除成功");
  }
});
 
connection.end();