const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    facebookId: {
        type: String,
        require: true
    },
    thumbnail: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema)
