const {
  Prisma
} = require('@prisma/client');

const users = [{
    //"company": "Kuhic, Haley and Bosco",
    "username": "Dalton.Connelly",
    //"role": "user",
  },
  {
    //"company": "MacGyver Inc",
    "username": "Keagan33",
    //"role": "user",
  },
  {
    //"company": "Rutherford, Stamm and Hickle",
    "username": "Anika_Watsica",
    //"role": "administrator",
  },
  {
    //"company": "Ward - Medhurst",
    "username": "Muhammad.Ritchie4",
    //"role": "administrator"
  }, {
    //"company": "Beatty and Sons",
    "username": "Cloyd19",
    //"role": "administrator",
  }
];

const projects = [{
    name: 'HUSKY ADVICE',
  },
  {
    name: 'BEST ENGINE',
  },
  {
    name: 'BIG EFFICACIOUS CORN',
  }
];

module.exports = {
  projects,
  users,
};