"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getAllUsers = exports.deleteUser = exports.createUser = void 0;
const User_1 = require("../model/User");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({
        data: yield User_1.User.create(Object.assign({}, req.body)),
        message: 'Usuário criado com sucesso!'
    });
});
exports.createUser = createUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    return res.status(200).json({
        data: yield User_1.User.destroy({ where: { id } }),
        message: 'Usuário excluído com sucesso!'
    });
});
exports.deleteUser = deleteUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({
        data: yield User_1.User.findAll(),
        message: 'Busca por usuários realizada com sucesso!'
    });
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    return res.status(200).json({
        data: yield User_1.User.findByPk(id),
        message: 'Busca por usuário realizada com sucesso!'
    });
});
exports.getUserById = getUserById;
