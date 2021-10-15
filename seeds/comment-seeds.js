const { Comment } = require('../models');

const commentData = [
    {
        comText: 'sdfasd fasdf asdf sdf',
        postId: 1,
        userId: 1
    },
    {
        comText: 'd fsdf sdf sdf sdf sadf',
        postId: 2,
        userId: 1
    },
    {
        comText: 'f efe fsefs dfsef',
        postId: 3,
        userId: 1
    },
    {
        comText: 'ef sefsdfsefsesa fsfe',
        postId: 4,
        userId: 2
    },
    {
        comText: 'f rger gergerge rgasd',
        postId: 5,
        userId: 3
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;