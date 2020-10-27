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
router.get('/api/posts/:id', (req, res) => {
    Posts.findById(req.params.id)
    .then(post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({message: "The post with the specified ID does not exist."});
        }
    }) 
    .catch(error => {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        })
    })
})


// @desc		Get a post by id
// @route		GET /:id/comments
router.get('/api/posts/:id/comments', (req, res) => {
    Posts.findPostComments(req.params.id)
    .then(data => {
        if (!data.length) {
            res.status(404).json({
                message:  "The post with the specified ID does not exist." 
            })
        } else {
            res.status(200).json(data)
        }
    })
    .catch(error => {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        })
    })
})


 // @desc		Add a new post
// @route		POST /
router.post('/api/posts', (req, res) => {
    Posts.insert(req.body)
    .then(post => {
        res.status(201).json(post)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: error.message,
            stack: error.stack
        })
    })
})

// @desc		Add a new post
// @route		POST /:id/comments
router.post('/api/posts/:id/comments', (req, res) => {
    const newComment = {post_id: req.params.id, ...req.body}
    Posts.insertComment(newComment)
    .then(data => {
        console.log(data)
        res.status(201).json(data)
    })
    .catch(error => {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        })
    })
})


// @desc		Update a post by id
 // @route		PUT /:id
 router.put('/api/posts/:id', (req, res) => {
     const changes = req.body;
     Posts.update(req.params.id, changes)
     .then(post => {
         if(post) {
             res.status(200).json(post)
         } else {
             res.status(404).json({message: "The post with the specified ID does not exist." })
         }
     })
     .catch(error => {
         res.status(500).json({
             message: error.message,
             stack: error.stack
         })
     })
 })

// @desc		Remove a post by id
// @route		DELETE /:id
router.delete('/api/posts/:id', (req, res) => {
    Posts.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'The post has been deleted'})
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    })
    .catch(error => {
        res.status(500).json({
            message: error.message
        })
    })
})


module.exports = router;