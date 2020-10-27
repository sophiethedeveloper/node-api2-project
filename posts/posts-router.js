const express = require("express");
const router = express.Router()
const Posts = require('./posts-model')

// @desc		Get all posts
// @route		GET /
router.get('/api/posts', (req, res) => {
    Posts.find(req.query)
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(error => {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        })
    })
})

// @desc		Get a post by id
// @route		GET /:id
router.get('/:id')


// @desc		Get a post by id
// @route		GET /:id/comments
router.get('/api/posts/:id/comments')


 // @desc		Add a new post
// @route		POST /


// @desc		Add a new post
// @route		POST /:id/comments
router.post('/api/posts/:id/comments')


// @desc		Update a post by id
 // @route		PUT /:id

// @desc		Remove a post by id
// @route		DELETE /:id



module.exports = router;