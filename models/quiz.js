const { Schema, model } = require('mongoose');
const Joi = require('joi');

const quizSchema = Schema({
  name: { type: String, required: true },
  data: [
    {
      question: { type: String, required: true },
      correctAnswer: { type: String, required: true },
      answers: [{ type: String, required: true }],
    },
  ],
});

const joiQuizSchema = Joi.object({
  name: Joi.string().required(),
  data: Joi.array().required(),
  moduleId: Joi.string().required(),
});

const Quiz = model('quiz', quizSchema);

module.exports = { joiQuizSchema, Quiz };
