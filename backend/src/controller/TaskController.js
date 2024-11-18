import Task from "../model/Task.js";
import getToken from "../utils/jwt/get-token.js";
import getUserByToken from "../utils/jwt/get-user-by-token.js";

class TaskController {
  
  async createTask(req, res) {
    const { name, description } = req.body;
    const token = getToken(req);
    
    try {
      const user = await getUserByToken(token);
      
      if (!name) { return res.status(422).json({ message: "Task name is mandatory!" }); }

      const newTask = await Task.create({
        name,
        description,
        completed: false,
        userId: user.id,
      });

      res.status(201).json(newTask);
    } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateTask(req, res) {
    const { name, description, completed } = req.body;
    const token = getToken(req);

    try {
      const user = await getUserByToken(token);
      const task = await Task.findByPk(req.params.id);

      if (!task) {
        return res.status(404).json({ message: "Task not found!" });
      }

      if (task.userId !== user.id) {
        return res.status(403).json({ message: "Unauthorized!" });
      }

      await task.update({
        name: name || task.name,
        description: description || task.description,
        completed: completed || task.completed,
      });

      res.status(200).json(task);
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteTask(req, res) {
    const token = getToken(req);

    try {
      const user = await getUserByToken(token);
      const task = await Task.findByPk(req.params.taskId);

      if (!task) {
        return res.status(404).json({ message: "Task not found!" });
      }

      if (task.userId !== user.id) {
        return res.status(403).json({ message: "Unauthorized!" });
      }

      await task.destroy({
        where: {
          id_task: req.params.taskId,
          userId: req.params.userId
      },
      })

      res.status(200).json({ message: "Task deleted successfully!" });
    } catch (error) {
      console.error("Error deleting task:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async findTask(req, res) {
    const token = getToken(req);

    try {
      const user = await getUserByToken(token);
      const task = await Task.findOne({
        where: { id_task: req.params.taskId, userId: req.params.userId },
      });

      if (!task) {
        return res.status(404).json({ message: "Task not found!" });
      }

      res.status(200).json(task);
    } catch (error) {
      console.error("Error finding task:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async findAllTasks(req, res) {
    const token = getToken(req);

    try {
      const user = await getUserByToken(token);
      const tasks = await Task.findAll({ where: { userId: user.id } });
      
      res.status(200).json(tasks);
    } catch (error) {
      console.error("Error finding tasks:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new TaskController();
