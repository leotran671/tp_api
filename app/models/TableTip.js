const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class TableTip extends Model { }
    TableTip.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            created_at: DataTypes.DATE,
            modified_at: DataTypes.DATE,
            tips: DataTypes.INTEGER,
            id_restaurantTable: DataTypes.INTEGER,
            id_service: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "TableTip",
            underscored: true,
        }
    );
    TableTip.associate = (models) => {
        TableTip.belongsTo(models.RestaurantTable, { foreignKey: "id_restaurantTable" });
        TableTip.belongsTo(models.Service, { foreignKey: "id_service" });
    };
    return TableTip;
};
