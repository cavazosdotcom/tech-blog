const { Post } = require('../models');

const postData = [
  {
    title: 'Title',
    content: 'Adding titles is cool',
    date: '02/27/2022',
    user_id: '1'
  },
  {
    title: 'Handlebars',
    content: 'Cool but not react',
    date: '02/24/2022',
    user_id: '1'
  },
  {
    title: 'MVC',
    content: 'This is hard to learn but it is rewarding',
    date: '02/19/2022',
    user_id: '2'
  },
  {
    title: 'Models',
    content: 'The biggest part of MVC',
    date: '02/26/2022',
    user_id: '3'
  },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
