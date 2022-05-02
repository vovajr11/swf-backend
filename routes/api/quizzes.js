const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');

const { quizzes: ctrl } = require('../../controllers');
const { joiQuizSchema } = require('../../models/quiz');

const router = express.Router();

router.get('/get-quizzes', ctrlWrapper(ctrl.getQuizzes));
router.get(
  '/get-quizzes-by-module-id/:id',
  ctrlWrapper(ctrl.getQuizzesByModuleId),
);
router.get('/get-quiz-by-id/:id', ctrlWrapper(ctrl.getQuizById));

router.post(
  '/add-quiz-choose-the-correct-answer',
  validation(joiQuizSchema),
  ctrlWrapper(ctrl.addQuizChooseTheCorrectAnswer),
);
router.delete('/remove', ctrlWrapper(ctrl.removeById));

module.exports = router;
