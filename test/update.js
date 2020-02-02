const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mybook'
});
 
connection.connect();
 
 let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
 let data = ['浪潮之巅','吴军','计算机','IT巨头的兴衰史',10];
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();