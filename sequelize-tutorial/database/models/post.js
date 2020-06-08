'use strict';
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
    }, {});
    Post.associate = function (models) {
        // associations can be defined here
        Post.hasMany(models.Comment, {
            onDelete: 'CASCADE',
        });

        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return Post;
};