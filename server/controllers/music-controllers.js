const { Tunes } = require('../models');

// Function to get all playlists
async function getMusic(req, res) {
    try {
        const allMixes = await Tunes.find();
        res.json(allMixes)
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to get one playlist
async function getMyMusic(req, res) {
    try {
        const myMix = await Tunes.findOne({ _id: req.params.tunesID })

        if(!myMix) {
            return res.status(404).json({ message: 'No playlist with that ID found :-(' })
        }
        res.json(myMix);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to create new playlist entry in DB
async function createMusic({body}, res) {
    try {  
        const newMix = await Tunes.create({
            link: body.link, 
            genre: body.genre
        })
        res.json({ message: "New playlist added~" , newMix})
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to update existing playlist info in database
async function editMusic(req, res) {
    try {
        const myMix = await Tunes.findOneAndUpdate(
            { _id: req.params.tunesID },
            { $set: req.body },
            { runValidators: true, new: true }
        )

        if (!myMix) {
            res.status(404).json({ message: "No playlist with that ID found, please try again!"})
        }

        res.json({message: "Playlist updated successfully!", myMix})
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to remove playlist from database by id
async function removeMusic(req, res) {
    try {
        const myMix = await Tunes.findOneAndDelete({ _id: req.params.tunesID })

        if(!myMix) {
            return res.status(404).json({ message: "No playlist with that ID found :-("})
        }

        res.json({ message: 'Playlist has been removed!', myMix })
    } catch (err) {
       res.status(500).json(err);
       console.log(err);
    }
};

// Function to get all playlists matching requested genre 
async function genreSelect(req, res) {
    try {
        const genreMix = await Tunes.find({ genre: req.params.genre });
        res.json(genreMix)
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

module.exports = {
    createMusic,
    getMusic,
    getMyMusic,
    editMusic,
    removeMusic,
    genreSelect
}