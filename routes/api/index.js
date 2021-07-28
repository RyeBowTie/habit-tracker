const router = require('express').Router();
const moodRoutes = require('./mood-routes');
const habitRoutes = require('./habit-routes');

router.use('/mood', moodRoutes);
router.use('/habits', habitRoutes);

module.exports = router;