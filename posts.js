// @desc		Get all posts
// @route		GET /
router.get('/')

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
