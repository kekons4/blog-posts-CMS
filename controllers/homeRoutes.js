const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async(req, res) => {
    try {
        const blogData = await Blog.findAll({include: [{model: User}]});
        const blogs = blogData.map((blog) => blog.get({plain: true}));
        res.render('homepage', {blogs, logged_in: req.session.logged_in, page_name: "Home"});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;