import { Sequelize } from "sequelize";
import db from '../db.js'

const User = db.define('user',{
    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

User.findByEmail = async function (email) {
    return await this.findOne({ where: { email } });
}

export default User
