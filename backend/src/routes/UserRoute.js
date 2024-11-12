import express from "express";
import UserController from "../controller/UserController.js";
import checkToken from "../utils/jwt/verify-token.js";

const userRoutes = express.Router();

//userRoutes.get("/", UserController.findAll);
userRoutes.post("/register", UserController.register);
userRoutes.post("/login", UserController.login);
userRoutes.get("/:id", checkToken, UserController.findUser);
userRoutes.put("/:id", UserController.updateUser);
//userRoutes.delete("/:id", checkToken, UserController.deleteUser);

export { userRoutes as default};