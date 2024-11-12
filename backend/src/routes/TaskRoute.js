import express from "express";
import TaskController from '../controller/TaskController.js'
import checkToken from "../utils/jwt/verify-token.js";

const taskRoutes = express.Router();

taskRoutes.post("/create", TaskController.createTask)
taskRoutes.put("/:id", TaskController.updateTask)
taskRoutes.get("/:userId/:taskId", checkToken, TaskController.findTask)
taskRoutes.get("/:userId", checkToken, TaskController.findAllTasks)
taskRoutes.delete("/:userId/:taskId", checkToken, TaskController.deleteTask)

export { taskRoutes as default};