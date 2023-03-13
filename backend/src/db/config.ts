import { Sequelize } from "sequelize-typescript";
import User from "../model/User";

const connection = new Sequelize(
    "template_api",
    "postgres",
    "A^BCxSFd#%qHv=W79uda",
    {
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        models: [
            User
        ]
    }
);

export default connection;