const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
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
        modelName: "serviceusers",
        timestamps: false
    }
);
ServiceUser.associate = (models) => {
    ServiceUser.belongsTo(models.Service, { foreignKey: "id_service" });
    ServiceUser.belongsTo(models.User, { foreignKey: "id_user" });
};
module.exports = ServiceUser;