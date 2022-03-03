const { Schema, model } = require('mongoose');
const Joi = require('joi');

const moduleSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  //   chapters: { type: Schema.Types.ObjectId, ref: 'module', required: true },
});

const joiModuleSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

const Module = model('module', moduleSchema);

module.exports = { joiModuleSchema, Module };
