import { Sequelize } from "sequelize-typescript";
import { User } from "../model/User";

const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'A^BCxSFd#%qHv=W79uda',
    database: 'template_api',
    logging: false,
    models: [
        User
    ]
});

export default connection;