import { RequestHandler } from "express";

import { User } from "../model/User";

export const createUser: RequestHandler = async (req, res, next) => {
    return res.status(200).json({
        data: await User.create({ ...req.body }),
        message: 'Usuário criado com sucesso!'
    });
};

export const deleteUser: RequestHandler = async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).json({
        data: await User.destroy({ where: { id } }),
        message: 'Usuário excluído com sucesso!'
    });
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
    return res.status(200).json({
        data: await User.findAll(),
        message: 'Busca por usuários realizada com sucesso!'
    });
}

export const getUserById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;

    return res.status(200).json({
        data: await User.findByPk(id),
        message: 'Busca por usuário realizada com sucesso!'
    })
};