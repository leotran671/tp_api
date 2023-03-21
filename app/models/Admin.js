const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
class Admin extends Model { }
Admin.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pincode: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "admins",
        createdAt: "created_at",
        updatedAt: "modified_at"
    }
);
module.exports = Admin;
