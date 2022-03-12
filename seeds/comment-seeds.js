const { Comment } = require('../models');

const commentData = [
    {
        content: 'I think comments are better',
        date: '02/28/2022',
        user_id: '2',
        post_id: '1',
    },
    {
        content: 'Handlebars are old!',
        date: '02/28/2022',
        user_id: '1',
        post_id: '2',
    },
    {
        content: 'React is the way to go',
        date: '02/28/2022',
        user_id: '3',
        post_id: '2',
    },
    {
        content: 'Titles tell us what it is',
        date: '02/28/2022',
        user_id: '3',
        post_id: '1',
    },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;