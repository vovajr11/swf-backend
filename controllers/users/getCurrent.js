const { User } = require('../../models');

const getCurrent = async (req, res) => {
  const { name, email, id } = req.user;

  res.json({
    status: 'succes',
    code: 200,
    data: {
      name,
      email,
      id,
    },
  });
};

module.exports = getCurrent;
