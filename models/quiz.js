const { Schema, model } = require('mongoose');
const Joi = require('joi');

const quizSchema = Schema({
  name: { type: String, required: true },
  quizType: { type: String, required: true },
  data: [
    {
      question: { type: String, required: true },
      correctAnswer: { type: String, required: true },
      answers: [{ type: String, required: true }],
    },
  ],
});

const joiQuizSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': 'Введіть назву вікторини!',
    'string.min': `Назва вікторини мінімум {#limit} символи!`,
  }),
  quizType: Joi.string().required(),
  data: Joi.array().min(1).required().messages({
    'array.min': `Квіз повинен містити мінімум {#limit} питання!`,
  }),
  moduleId: Joi.string().required().messages({
    'string.empty': 'Додайте назву модуля!',
  }),
});

const Quiz = model('quiz', quizSchema);

module.exports = { joiQuizSchema, Quiz };
