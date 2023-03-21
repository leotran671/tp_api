const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class User extends Model { }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            created_at: DataTypes.DATE,
            modified_at: DataTypes.DATE,
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            active: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "User",
            underscored: true,
        }
    );
    return User;
};
