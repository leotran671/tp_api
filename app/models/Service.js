const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
class Service extends Model { }
Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        shiftType: DataTypes.INTEGER,
        shiftClosed: DataTypes.BOOLEAN,
    },
    {
        sequelize,
        modelName: "services",
        createdAt: "created_at",
        updatedAt: "modified_at"
    }
);
module.exports = Service;