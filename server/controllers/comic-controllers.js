const { Comic } = require('../models');

// Function to get all comics
async function getComics(req, res) {
    try {
        const allComics = await Comic.find();
        res.json(allComics)
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to get one comic
async function getMyComic(req, res) {
    try {
        const myComic = await Comic.findOne({ _id: req.params.comicID })

        if(!myComic) {
            return res.status(404).json({ message: 'No comic with that ID found :-(' })
        }
        res.json(myComic);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to create new comic 
async function createComic({body}, res) {
    try {  
        const newComic = await Comic.create({
            title: body.title,
            author: body.author,
            description: body.description,
            cover:body.cover,
            link: body.link, 
            genre: body.genre
        })
        res.json({ message: "New comic added~" , newComic})
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to update existing comic info in database
async function editComic(req, res) {
    try {
        const myComic = await Comic.findOneAndUpdate(
            { _id: req.params.comicID },
            { $set: req.body },
            { runValidators: true, new: true }
        )

        if (!myComic) {
            res.status(404).json({ message: "No comic with that ID found, please try again!"})
        }

        res.json({message: "Comic updated successfully!", myComic})
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to remove comic from database by id
async function removeComic(req, res) {
    try {
        const myComic = await Comic.findOneAndDelete({ _id: req.params.comicID })

        if(!myComic) {
            return res.status(404).json({ message: "No comic with that ID found :-("})
        }

        res.json({ message: 'Comic has been removed!', myComic })
    } catch (err) {
       res.status(500).json(err);
       console.log(err);
    }
};

// Function to get all comics matching requested genre 
async function genreSearch(req, res) {
    try {
        const genreComics = await Comic.find({ genre: {$all: req.params.genre} });
        res.json(genreComics);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

module.exports = {
    createComic,
    getComics,
    getMyComic,
    editComic,
    removeComic,
    genreSearch
}