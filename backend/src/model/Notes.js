import { Sequelize } from "sequelize";
import db from '../db.js';
import User from "./User.js";

const Notes = db.define('notes', {
    id_notes: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
})

Notes.associate = () => {

    User.hasMany(Notes, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    })
    Notes.belongsTo(User, {
        foreignKey: 'userId',
    })
}

export default Notes
