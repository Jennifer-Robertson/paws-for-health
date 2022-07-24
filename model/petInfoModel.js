const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petInfoSchema = new Schema({
    weight: {
        type: Number,
        default: "none"
    },
    appetite: {
        type: Number,
        default: "none"
    },
    mood: {
        type: Number,
        default: "none"
    },
    water: {
        type: Number,
        default: "none"
    },
    urine: {
        type: Number,
        default: "none"
    },
    stool: {
        type: Number,
        default: "none"
    },
    stoolConsistency: {
        type: Number,
        default: "none"
    },
    vomit: {
        type: Number,
        default: "none"
    },

})

module.exports = mongoose.model('PetInfo', petInfoSchema)