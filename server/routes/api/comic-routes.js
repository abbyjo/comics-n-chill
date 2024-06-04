const router = require('express').Router();

const {
  createComic,
  getComics,
  getMyComic,
  editComic,
  removeComic,
  genreSearch  
} = require('../../controllers/comic-controllers.js');

// "comics-n-chill.com/api/comics"
// Gets all comics, Adds new comic to database
router.route('/').get(getComics).post(createComic);

// "comics-n-chill.com/api/comics/:comicID"
// Search by comic-id: gets, edits or deletes one comic (from DB)
router.route('/:comicID').get(getMyComic).put(editComic).delete(removeComic);

// "comics-n-chill.com/api/comics/:genre"
// Filters comic entries by genre 
router.route('/:genre').get(genreSearch)

module.exports = router;