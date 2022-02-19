const User = require('/User');

// User have many posts

// Post belongs to user (Postuser_id)

// User have many comments

// Comments belongs to user (Comments.user_id)

// Post have many Comments

// Comment belongs to Post (Comments.post_id)




module.exports = { User, Project };