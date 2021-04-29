const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({ 
            where: { user_id: req.session.user_id }
        });

        if(!blogData) {
            res.status(404).json({ message: "You have no posts" });
            return;
        }

        const blogs = blogData.map((blog) => blog.get({plain: true}));
        res.render('dashboard', {blogs, logged_in: req.session.logged_in, page_name: "Dashboard"});
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/post', withAuth, async (req, res) => {
    res.render('dashboardpost', {logged_in: req.session.logged_in, user_id: req.session.user_id, page_name: "Dashboard"});
});

router.get('/update/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        if(!blogData) {
            res.status(404).json({message: "ERROR you have no blog with that id"});
            return;
        }
        const blog = blogData.get({plain: true});
        res.render('dashboardupdate', {blog, page_name: "Dashboard", logged_in: req.session.logged_in, user_id: req.session.user_id, blog_id: req.params.id});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;