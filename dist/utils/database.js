"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql2");
const db = require("../database");
const con = mysql.createConnection({
    database: db.database,
    host: db.host,
    password: db.password,
    user: db.user,
});
exports.con = con;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBZ0M7QUFDaEMsa0NBQW1DO0FBQ25DLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVE7SUFDckIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO0lBQ2IsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRO0lBQ3JCLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtDQUNoQixDQUFDLENBQUM7QUFDTSxrQkFBRyJ9