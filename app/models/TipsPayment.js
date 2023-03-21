const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class TipsPayment extends Model { }
    TipsPayment.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            created_at: DataTypes.DATE,
            modified_at: DataTypes.DATE,
            amount: DataTypes.INTEGER,
            id_user: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "TipsPayment",
            underscored: true,
        }
    );
    TipsPayment.associate = (models) => {
        TipsPayment.belongsTo(models.User, { foreignKey: "id_user" });
    };
    return TipsPayment;
};
