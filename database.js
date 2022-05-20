const db=require('./connect');

class Database {
    constructor(db){
        this.connection=db
    }
    alldept(){
     return   this.connection.promise().query(
            'SELECT * FROM department'
        
        )
    }
    allroles(){
        return this.connection.promise().query(
            'SELECT * FROM roles'
        )
    }
   allemployees(){
       return this.connection.promise().query(
           'SELECT * FROM employees'
       )
   } 
   adddept(){
       return this.connection.promise().query(
           'INSERT INTO department'
       )
   }
   addroles(){
       return this.connection.promise().query(
           'INSERT INTO roles'
       )
   }
   addemployees(){
       return this.connection.promise().query(
           'INSERT INTO employees'
       )
   }
   updaterole(){
       return this.connection.promise().query(
           'UPDATE SET roles'
       )
   }
}
module.exports=Database;