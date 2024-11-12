import Sequelize from 'sequelize';

const sequelize = new Sequelize('bdweb', 'postgres', 'bd123', {
    host: 'localhost',
    port: 5433,    
    dialect: 'postgres',
});

export default sequelize;