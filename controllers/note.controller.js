const NoteModel = require('../models/note.model');

const addNote = async (req, res) => {
  try {
    const { noteText, secretAnnotation } = req.body;
    if (!req.user.isAdmin) {
      const newNote = await NoteModel.create({
        noteText,
        ownerId: req.user._id
      });
      const list = await NoteModel.find({ ownerId: req.user._id }).select('-secretAnnotation');
      return res.status(200).json(list);
    }
    else {
      const newNote = await NoteModel.create({
        noteText,
        ownerId: req.user._id,
        secretAnnotation
      });
      const list = await NoteModel.find();
      return res.status(200).json(list);
    }
    
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getList = async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      const list = await NoteModel.find({ ownerId: req.user._id })
        .select('-secretAnnotation');
      return res.status(200).json(list);
    }
    else {
      const list = await NoteModel.find();
      return res.status(200).json(list);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateNote = async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      const note = await NoteModel.findById(req.params.id);
      if (req.user._id.toString() != note.ownerId.toString())
        return res.status(400).json({ error: 'Not allowed' });
 
      await NoteModel.findByIdAndUpdate(req.params.id, { noteText: req.body.noteText });
      const list = await NoteModel.find({ ownerId: req.user._id }).select('-secretAnnotation');
      return res.status(200).json(list);
    }
    else {
      const note = await NoteModel.findByIdAndUpdate(req.params.id, req.body);
      const list = await NoteModel.find();
      return res.status(200).json(list);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  addNote,
  getList,
  updateNote
}

