const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.get('/login', async function (req, res, next) {
	// try {
	// 	const posts = await postsService.getPosts();
	// 	res.json(posts);
	// } catch (e) {
	// 	next(e);
	// }
});

router.post('/register', async function (req, res, next) {
	// const post = req.body;
	// try {
	// 	const newPost = await postsService.savePost(post);
	// 	res.status(201).json(newPost);
	// } catch (e) {
	// 	next(e);
	// }
});

module.exports = router;