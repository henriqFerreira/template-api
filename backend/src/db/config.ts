import { Sequelize } from "sequelize-typescript";
import { User } from "../model/User";

// const connection = new Sequelize("postgres://postgres:A^BCxSFd#%qHv=W79uda@postgres:5432/template_api");

const connection = new Sequelize(
    "template_api",
    "postgres",
    "A^BCxSFd#%qHv=W79uda",
    {
        host: "postgres",
        dialect: "postgres",
        models: [
            User
        ]
    }
);

export default connection;