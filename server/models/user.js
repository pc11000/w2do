const mongoose = require('mongoose');
const uniqvalidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true,},
  language: { type: String, default: 'English' },
});

userSchema.plugin(uniqvalidator);

module.exports = mongoose.model('User', userSchema);
