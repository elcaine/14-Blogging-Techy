const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commRoutes = require('./commRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comms', commRoutes);

module.exports = router;
