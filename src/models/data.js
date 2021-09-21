'use strict';

const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  birth: { type: String, required: true },
  country: { type: String, required: true },
  university: { type: String, required: false },
  programmingLanguage: { type: Array, required: false },
});

const Data = mongoose.model('users', dataSchema);

module.exports = Data;
