const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    'username': {
        type: String,
        required: true
    },
    'password': {
        type: String,
        required: true
    },
    'email': {
        type: String
    },
    'card': {
        type: Buffer
    },
});

module.exports = mongoose.model('User', UserSchema);