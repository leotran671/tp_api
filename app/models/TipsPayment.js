const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
class TipsPayment extends Model { }
TipsPayment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: DataTypes.INTEGER,
        id_user: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "tipspayments",
        createdAt: "created_at",
        updatedAt: "modified_at"
    }
);
TipsPayment.associate = (models) => {
    TipsPayment.belongsTo(models.User, { foreignKey: "id_user" });
};
module.exports = TipsPayment;