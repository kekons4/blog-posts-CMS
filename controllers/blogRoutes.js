const router = require('express').Router();
const { Blog } = require('../models');

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        if(!blogData) {
            res.status(404).json({message: "ERROR there is no blog post with that id"});
            return;
        }
        const blog = blogData.get({plain: true});
        res.render('blog', {blog, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;