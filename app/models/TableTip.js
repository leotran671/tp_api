const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class TableTip extends Model { }

TableTip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tips: DataTypes.INTEGER,
        id_restaurantTable: DataTypes.INTEGER,
        id_service: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "tabletips",
        createdAt: "created_at",
        updatedAt: "modified_at"
    }
);
module.exports = TableTip;
