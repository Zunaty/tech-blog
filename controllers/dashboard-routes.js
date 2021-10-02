const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', (req, res) => {
    Post.findAll().then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));

        res.render('dashboard', {posts})
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;