const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const blogRoutes = require('./blogRoutes');
const loginRoutes = require('./loginRoutes');
const signupRoutes = require('./signupRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/blogs', blogRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/api', apiRoutes);

module.exports = router;