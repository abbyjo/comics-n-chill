const router = require('express').Router();

const musicRoutes = require('./music-routes');
const comicRoutes = require('./comic-routes');

router.use('/music', musicRoutes);
router.use('/comics', comicRoutes);

module.exports = router;