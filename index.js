//import inquirer,
const { type } = require('express/lib/response');
const inquirer = require('inquirer');
const Database = require('./database');
const db=require('./connect')

const database = new Database(db);

inquirer
    .prompt([{
        type: 'list',
        name: 'view',
        message: 'view all roles, all dept, all employees,',
        choices: ['view all dept', 'view all roles', 'view all employees', 'add dept', 'add role', 'add employee', 'update employee role']

    }
    ])
    .then((answers) => {
        switch (answers.view) {
            case 'view all dept': {
                database.alldept().then(depts => console.log(depts))
            }
            case 'view all roles': {
              database.allroles().then(roles=> console.log (roles));

            }
            case 'view all employees':{
                database.allemployees().then(employee=>console.log(employee));
            }
            case 'add dept':{
                database.adddept().then(adddept=>console.log(adddept));
            }
            case 'add roles':{
                database.addroles().then(addrole=>console.log(addrole));
            }
            case 'add employees':{
                database.addemployees().then(addemployee=>console.log(addemployee));
            }
            case 'update roles':{
                database.updaterole().then(updateroles=>console.log(updateroles))
            }
        }
    })