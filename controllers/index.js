const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const blogRoutes = require('./blogRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/', homeRoutes);
router.use('/blogs', blogRoutes);
router.use('/login', loginRoutes);
router.use('/api', apiRoutes);

module.exports = router;