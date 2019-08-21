var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', 
  port : 3306,
  user     : 'root',
  password : 'password',
  database : 'bamazon_db'
});
 
connection.connect(function(){
    console.log ("connected");
    connection.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;
        console.table(results);
      });
       
});
 

// connection.end();