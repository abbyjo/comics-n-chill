const { Schema, model } = require('mongoose');

const tunesSchema = new Schema({
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

const Tunes = model('Tunes', tunesSchema);

module.exports = Tunes;