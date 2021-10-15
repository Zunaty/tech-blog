const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Getting all posts
router.get('/', (req, res) => {
    Post.findAll().then(dbPostData => res.json(dbPostData)).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Getting one post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No Post found with this id' });
            return;
        }
        
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Creating a post
router.post('/', (req, res) => {
    Post.create(req.body).then(dbPostData => res.json(dbPostData)).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Updating a post
router.put('/:id', (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No Post found with this id'});
            return;
        }

        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Deleting a post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No Post found with this id'});
            return;
        }

        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;