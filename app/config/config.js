const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root", // nom d'utilisateur MySQL
    password: "", // mot de passe MySQL
    database: "tp_api", // nom de la base de données MySQL
});

module.exports = db;