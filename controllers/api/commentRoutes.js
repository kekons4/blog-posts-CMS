const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/create', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        if(!commentData) {
            res.status(400).json({ message: "ERROR with creating your comment" });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/update', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, { where: { id: req.body.id } });
        if(!commentData) {
            res.status(404).json({ message: "ERROR there is no comment with that id" });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/delete', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({where: { id: req.body.id }});
        if(!commentData){
            res.status(404).json({ message: "ERROR there is no comment with that id" });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;