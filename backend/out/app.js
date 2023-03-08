"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RUser_1 = __importDefault(require("./routes/RUser"));
const body_parser_1 = require("body-parser");
const config_1 = __importDefault(require("./db/config"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use('/user', RUser_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default.sync().then(() => {
    console.log("Banco de dados inicializado com sucesso.");
}).catch((err) => {
    console.log("[ ERR ]", err);
});
app.listen(3000);
