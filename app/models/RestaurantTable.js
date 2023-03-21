const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class RestaurantTable extends Model { }
    RestaurantTable.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            created_at: DataTypes.DATE,
            modified_at: DataTypes.DATE,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "RestaurantTable",
            underscored: true,
        }
    );
    return RestaurantTable;
};
