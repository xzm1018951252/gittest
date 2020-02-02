const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mybook'
});
 
connection.connect();
 
 let sql = 'select * from book where id=?';
 let data = [1];
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();