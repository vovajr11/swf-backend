const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');

const { quizzes: ctrl } = require('../../controllers');
const { joiQuizSchema } = require('../../models/quiz');

const router = express.Router();

router.post(
  '/add-quiz-choose-the-correct-answer',
  validation(joiQuizSchema),
  ctrlWrapper(ctrl.addQuizChooseTheCorrectAnswer),
);
router.delete('/remove', ctrlWrapper(ctrl.removeById));

module.exports = router;
