const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Post.findAll().then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));

        res.render('dashboard', {posts})
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/addpost', withAuth, (req, res) => {
    res.render('addpost', {
        loggedIn: req.session.loggedIn,
        dashloggedIn: req.session.loggedIn,
        dashuser: req.session.username
    });
});

module.exports = router;