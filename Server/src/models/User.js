const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("User", {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {timestamps: false}
    )
}