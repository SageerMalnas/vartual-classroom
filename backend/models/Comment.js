const mongoose = require("mongoose");



// all the replies and comment will be stored for specific user
const commentSchema = new mongoose.Schema({
    content: {type: String, required:true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
});

module.exports = mongoose.model('Comment', commentSchema);