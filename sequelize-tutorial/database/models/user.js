'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING
    }, {});
    User.associate = function (models) {
        User.hasMany(models.Post, {
            onDelete: 'CASCADE',
        });

        User.hasMany(models.Comment, {
            onDelete: 'CASCADE',
        });
        // associations can be defined here
    };
    return User;
};