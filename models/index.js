const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User have many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'Cascade',
});

// Post belongs to user (Postuser_id)
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// User have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'Cascade',
});

// Comments belongs to user (Comments.user_id)
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

// Post have many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'Cascade',
});

// Comment belongs to Post (Comments.post_id)
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

module.exports = { 
    User,
    Post,
    Comment,
};