const router = require('express').Router();
const { Blog, Comment } = require('../models');

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        if(!blogData) {
            res.status(404).json({message: "ERROR there is no blog post with that id"});
            return;
        }
        const blog = blogData.get({plain: true});

        const commentData = await Comment.findAll({ where: { blog_id: req.params.id } });
        const comments = commentData.map((comment) => comment.get({plain: true}));

        res.render('blog', {blog, comments, logged_in: req.session.logged_in, blog_id: req.params.id, user_id: req.session.user_id});
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;