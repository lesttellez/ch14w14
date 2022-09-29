const User = require('./user-index');
const Post = require('./post-index');
const Comment = require('./comment-index');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};