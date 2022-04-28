const { BadRequest } = require('http-errors');
const { Module, Quiz } = require('../../models');

const addQuizChooseTheCorrectAnswer = async (req, res) => {
  const moduleId = req.body.moduleId;
  const { _id, name, quizType } = await Quiz.create(req.body);

  await Module.findByIdAndUpdate(
    moduleId,
    {
      $push: { quizzes: { _id, name, quizType } },
    },
    {
      new: true,
    },
  );

  res.status(201).json({
    code: 201,
  });
};

module.exports = addQuizChooseTheCorrectAnswer;
