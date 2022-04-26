const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');

const { quizzes: ctrl } = require('../../controllers');
const { joiQuizSchema } = require('../../models/quiz');

const router = express.Router();

router.post('/add', validation(joiQuizSchema), ctrlWrapper(ctrl.add));
router.delete('/remove', ctrlWrapper(ctrl.removeById));

module.exports = router;
