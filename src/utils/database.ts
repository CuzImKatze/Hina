import * as mysql from "mysql2";
import db = require("../database");
const con = mysql.createConnection({
    database: db.database,
    host: db.host,
    password: db.password,
    user: db.user,
});
export { con };
