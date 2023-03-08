"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.get("/", userController_1.getAllUsers)
    .get("/:id", userController_1.getUserById)
    .post("/", userController_1.createUser)
    .delete("/:id", userController_1.deleteUser);
exports.default = router;
