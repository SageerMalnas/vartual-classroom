const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    lectures: [{type: String}],
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});
  
module.exports = mongoose.model('Session', sessionSchema);