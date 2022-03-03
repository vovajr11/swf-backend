const { Course, Module } = require('../../models');

const add = async (req, res) => {
  const courseId = req.params.courseId;

  console.log(req.params.courseId, 'req.params.id');
  const { _id: id, name, description } = await Module.create(req.body);

  await Course.findByIdAndUpdate(
    courseId,
    {
      $push: { modules: id },
    },
    {
      new: true,
    },
  );

  res.status(201).json({
    code: 201,
    data: { id: id, name, description },
  });
};

module.exports = add;
