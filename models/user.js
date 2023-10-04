const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');
class User extends Model {}
User.init({
 id: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },
 name: {
 type: DataTypes.STRING,
 allowNull: false
 },
 email: {
 type: DataTypes.STRING,
 allowNull: false,
 unique: true
 }
}, {
 sequelize,
 modelName: 'user'
});
module.export = User;