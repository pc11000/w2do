const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  toDoDay: { type: String, required: true },
  isDone: { type: Boolean, required: false },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Item', itemSchema);
