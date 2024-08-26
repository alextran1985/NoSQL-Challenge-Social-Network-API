const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// --> ALl of these routes are prefixed with '/api'
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
