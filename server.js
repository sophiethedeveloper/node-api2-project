const express = require("express");
const postsRouter = require('./posts/posts-router.js')

// 2 Instantiate and configure the server
const server = express();
server.use(express.json());

server.use(postsRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Server is working!</h2>`)
})

module.exports = server;