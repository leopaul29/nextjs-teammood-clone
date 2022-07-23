const { Prisma } = require('@prisma/client');

const users = [
  {
    username: 'Hats',
  },
  {
    username: 'Socks',
  },
  {
    username: 'Shirts',
  },
];

const projects = [
  {
    name: 'Cool helmet.',
  },
  {
    name: 'Grey T-Shirt',
  },
  {
    name: 'Socks',
  },
  {
    name: 'Sweatshirt',
  },
];

module.exports = {
  projects,
  users,
};
