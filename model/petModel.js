const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petModelSchema = new Schema({
    petName: {
        type: String,
        required: true
    },
    petAge: {
        type: Number,
        required: true
    },
    petSpecies: {
        type: String,
        required: true
    },
})

const Pet = Mongoose.model("petModel", petModelSchema);

module.exports = Pet;