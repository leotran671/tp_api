const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class RestaurantTable extends Model { }
RestaurantTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "restauranttable",
        createdAt: "created_at",
        updatedAt: "modified_at"
    }
);

module.exports = RestaurantTable;