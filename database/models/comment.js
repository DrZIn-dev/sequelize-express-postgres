module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      comment: DataTypes.TEXT,
    },
    {}
  )
  Comment.associate = (models) => {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    })
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false,
      },
    })
  }
  return Comment
}
