"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../model/User");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'A^BCxSFd#%qHv=W79uda',
    database: 'template_api',
    logging: false,
    models: [
        User_1.User
    ]
});
exports.default = connection;
