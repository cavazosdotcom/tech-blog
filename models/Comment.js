const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // content has to be text, can't be null
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // date has to be a date, default set to time of comment, can't be null
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // id number referencing the User model, id property
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id',
      },
    },
    // id number referencing the Post model, id property
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'post',
          key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;