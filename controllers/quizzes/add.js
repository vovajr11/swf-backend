const { Module, Quiz } = require('../../models');

const add = async (req, res) => {
  const moduleId = req.body.moduleId;
  const { _id, name, data } = await Quiz.create(req.body);

  console.log(data, 'data');

  await Module.findByIdAndUpdate(
    moduleId,
    {
      $push: { quizzes: { _id, name, data } },
    },
    {
      new: true,
    },
  );

  res.status(201).json({
    code: 201,
  });
};

module.exports = add;
