import { Sequelize } from "sequelize";

const db = new Sequelize('tbs_request', 'root', 'root', {
    host: "127.0.0.1",
    dialect: "mysql"
});

export default db;