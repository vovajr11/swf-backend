const { Schema, model } = require('mongoose');
const Joi = require('joi');

const chapterSchema = Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
});

const joiChapterSchema = Joi.object({
  name: Joi.string().required(),
  content: Joi.string().required(),
  moduleId: Joi.string().required(),
});

const Chapter = model('chapter', chapterSchema);

module.exports = { joiChapterSchema, Chapter };
