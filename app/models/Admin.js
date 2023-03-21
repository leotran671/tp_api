const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Admin extends Model { }
    Admin.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            created_at: DataTypes.DATE,
            modified_at: DataTypes.DATE,
            pincode: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Admin",
            underscored: true,
        }
    );
    return Admin;
};
