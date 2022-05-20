const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
     
      user: 'root',
      
      password: 'Winkie2216!',
      database: 'books_db'
    },
    console.log(`Connected to the books_db database.`)
  );
  module.exports=db;
  