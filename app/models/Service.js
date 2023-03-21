const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Service extends Model { }
    Service.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            created_at: DataTypes.DATE,
            modified_at: DataTypes.DATE,
            shiftType: DataTypes.INTEGER,
            shiftClosed: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Service",
            underscored: true,
        }
    );
    return Service;
};
