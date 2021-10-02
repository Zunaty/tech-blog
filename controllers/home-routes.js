const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll().then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));

        res.render('homepage', {posts})
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;