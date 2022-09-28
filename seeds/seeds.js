const User = require('./user-seeds');
const Post = require('./post-seeds');
const Comment = require('./comment-seeds');
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