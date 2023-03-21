const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class ServiceUser extends Model { }
    ServiceUser.init(
        {
            id_service: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            id_user: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: "ServiceUser",
            underscored: true,
            tableName: "serviceUsers",
        }
    );
    ServiceUser.associate = (models) => {
        ServiceUser.belongsTo(models.Service, { foreignKey: "id_service" });
        ServiceUser.belongsTo(models.User, { foreignKey: "id_user" });
    };
    return ServiceUser;
};
