const seedUsers = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

// Async function that waits for each function to seed
const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedPost();

    await seedComment();

    process.exit(0);
};

seedAll();