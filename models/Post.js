const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // title has to be a string, default length set to 255 characters, can't be null
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
    // integer referencing the User model, id property
    user_id: {
      type: DataTypes.INTEGER,
      references: {
      model: 'user',
      key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;