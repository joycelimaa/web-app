import { Sequelize } from "sequelize";
import db from '../db.js';
import User from "./User.js";

const Task = db.define('task', {

    id_task: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },

})

Task.associate = () => {

    User.hasMany(Task, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    })
    Task.belongsTo(User, {
        foreignKey: 'userId',
    })
}

export default Task
