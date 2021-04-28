const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/create', withAuth, async(req, res) => {
    try {
        const blogData = await Blog.create(req.body);
        if(!blogData) {
            res.status(400).json({message: "ERROR there was a problem with creating your post"});
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/update', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        if(!blogData) {
            res.status(404).json({ message: "ERROR there is not blog post with that id" });
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/delete', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: { 
                id: req.body.id,
                user_id: req.session.user_id
            }
        });
        if(!blogData){
            res.status(404).json({ message: "ERROR there is no blog post with that id" });
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;