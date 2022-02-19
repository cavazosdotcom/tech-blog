const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false.valueOf,
      primaryKey: true,
      autoIncrement: true
    },
    title: {

    },
    text: {

    },
    posted_date: {

    },
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