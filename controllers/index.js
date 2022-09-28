const router = require('express').Router();

const dashboardRoutes = require('../controllers/dashboard-routes');
const homeRoutes = require('./home-routes');
const apiRoutes = require("../controllers/api")

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;