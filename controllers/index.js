const router = require('express').Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);

const userRoutes = require('./users');

router.use('/', userRoutes);

module.exports = router;

