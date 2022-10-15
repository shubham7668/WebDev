const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  written: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  user1: {
    type: String,
  },
});

module.exports = mongoose.model("writtenNotes", notesSchema);
