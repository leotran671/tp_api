const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
class User extends Model { }
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        active: DataTypes.BOOLEAN,
    },
    {
        sequelize,
        modelName: "users",
        createdAt: "created_at",
        updatedAt: "modified_at",
    }
);
module.exports = User;