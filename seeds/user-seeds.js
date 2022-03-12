const { User } = require('../models');

const userData = [
  {
    name: 'richard123',
    password: 'password123',
  },
  {
    name: 'supercoolguy',
    password: 'password123',
  },
  {
    name: 'Iamcooldude',
    password: 'password123',
  },
  {
    name: 'nameisname',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
