const { Course } = require('../../models');
const { prepareCoursesResponse } = require('../../middlewares');

const getDetailsOfAllCourses = async (req, res) => {
  const courses = await Course.find({}).populate({
    path: 'modules',
    select: ['name', 'description'],
  });

  res.json({
    status: 'success',
    code: 200,
    data: {
      courses: prepareCoursesResponse(courses),
    },
  });
};

module.exports = getDetailsOfAllCourses;
