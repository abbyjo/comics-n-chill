const { Schema, model } = require('mongoose');

const comicSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    genre: [
        {
            type: String,
            required: true
        },
    ]
});

const Comic = model('Comic', comicSchema);

module.exports = Comic;