const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Class title is required'] 
  },
  instructor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: [true, 'Instructor is required']
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Optional: Middleware to update `updatedAt` on save
classSchema.pre('save', function(next) {
  if (this.isModified()) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports = mongoose.model('Class', classSchema);
