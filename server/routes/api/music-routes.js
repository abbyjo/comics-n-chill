const router = require('express').Router();

const {
  createMusic,
  getMusic,
  getMyMusic,
  editMusic,
  removeMusic,
  genreSelect  
} = require('../../controllers/music-controllers');

// "comics-n-chill.com/api/music"
// Gets all playlists, Adds new playlist to database
router.route('/').get(getMusic).post(createMusic);

// "comics-n-chill.com/api/music/:musicID"
// Search by playlist-id: gets, edits or deletes one playlist entry (from DB)
router.route('/:musicID').get(getMyMusic).put(editMusic).delete(removeMusic);

// "comics-n-chill.com/api/music/:genre"
// Filters playlists by genre 
router.route('/:genre').get(genreSelect)

module.exports = router;