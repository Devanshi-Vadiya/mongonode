const mongoose = require("mongoose");
const Note = require("../models/note.model");

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// 1. Create note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null,
      });
    }

    const note = await Note.create(req.body);

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};