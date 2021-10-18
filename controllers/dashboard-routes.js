const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

// Getting all posts the user has created
router.get('/', (req, res) => {
    Post.findAll({
        where: {
            userId: req.session.user_id
        }
    }).then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            dashloggedIn: req.session.loggedIn,
            dashuser: req.session.username
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Sending the user to the post adding page
router.get('/addpost', withAuth, (req, res) => {
    res.render('addpost', {
        loggedIn: req.session.loggedIn,
        dashloggedIn: req.session.loggedIn,
        dashuser: req.session.username
    });
});

// User is sent to edit post page
router.get('/editpost/:id', withAuth, (req, res) => { 
    Post.findAll({
        where: {
            id: req.params.id
        }
    }).then(postData => {
        const post = postData.map(post => post.get({ plain: true }));

        res.render('editpost', {
            post,
            loggedIn: req.session.loggedIn,
            dashloggedIn: req.session.loggedIn,
            dashuser: req.session.username
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// User accesses their profile page
router.get('/profile', withAuth, (req, res) => {
    res.render('profile', {
        loggedIn: req.session.loggedIn
    })
});

module.exports = router;