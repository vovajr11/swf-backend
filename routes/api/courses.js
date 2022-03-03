const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { joiCourseSchema } = require('../../models/course');
const { courses: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/courses-details', ctrlWrapper(ctrl.getDetailsOfAllCourses));

router.post('/', validation(joiCourseSchema), ctrlWrapper(ctrl.add));

module.exports = router;
