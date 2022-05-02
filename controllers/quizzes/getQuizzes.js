const { Quiz } = require('../../models');

const getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find({});

  console.log(quizzes, 'quizzes');

  res.json({
    status: 'success',
    code: 200,
    quizzes: quizzes,
  });
};

module.exports = getQuizzes;
