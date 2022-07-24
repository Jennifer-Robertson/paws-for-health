const validator = require('validator');
const Mongoose = require("mongoose");
const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'invalid email']

    },
    role: {
        type: String,
        default: "Basic",
        required: true,
    },
    pets: []
});

const User = Mongoose.model("user", UserSchema);

module.exports = User;