const { User } = require('../models');

const userData = [
    {
        username: 'bleh123',
        email: 'bleh@ljfs.com',
        password: 'password1'
    },
    {
        username: 'blah321',
        email: 'blah@lljidd.com',
        password: 'password1'
    },
    {
        username: 'jkldjfs',
        email: 'lkje@oijlk.com',
        password: 'password1'
    },
    {
        username: 'joezzz',
        email: 'zz@joe.com',
        password: 'password1'
    },
    {
        username: 'lkwjflkj',
        email: 'wwww@kljflkad.com',
        password: 'password1'
    },
    {
        username: 'test',
        email: 'test@test.com',
        password: 'test'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;