const { NotFound } = require('http-errors');
const { Quiz } = require('../../models');

const getQuizById = async (req, res) => {
  const { id } = req.params;

  const quiz = await Quiz.findById(id);

  res.json({ status: 'success', code: 200, data: quiz.data });
};

module.exports = getQuizById;
