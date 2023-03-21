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
        created_at: DataTypes.DATE,
        modified_at: DataTypes.DATE,
        pincode: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "admin"
    }
);
module.exports = Admin;
