const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const noteSchema = new mongoose.Schema({
  noteText: {
    type: String,
    required: ['note text is required!'],
    trim: true
  },
  secretAnnotation: {
    type: String,
    trim: true
  },
  ownerId: {
    type: ObjectId,
    ref: 'User'
  }
});

noteSchema.methods = {
  getPublicData() {
    return {
      _id: this._id,
      noteText: this.noteText,
      ownerId: this.ownerId
    };
  }
};

module.exports = mongoose.model('Note', noteSchema);