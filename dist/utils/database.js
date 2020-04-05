"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql2");
const db = require("../database.json");
const con = mysql.createConnection({
    host: db.host,
    user: db.user,
    database: db.database,
    password: db.password
});
module.exports = con;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBK0I7QUFDL0IsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFDdEMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtJQUNiLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtJQUNiLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUTtJQUNyQixRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVE7Q0FDdEIsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMifQ==