const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const movieSchema = new Schema({
    movieId: {
        type: String,
        required: true,
    },
    year: {
        type: String,
    },
    type: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    year: {
        type: String,
    },
    watched: {
        type : Boolean,
        default: false
    },
    description: {
        type: String,

    },
    link: {
        type: String,
    },
});

module.exports = movieSchema;