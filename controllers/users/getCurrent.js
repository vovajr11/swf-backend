const { User } = require('../../models');

const getCurrent = async (req, res) => {
  const { id, name, email, role } = req.user;

  res.json({
    status: 'succes',
    code: 200,
    data: {
      id,
      name,
      email,
      role,
    },
  });
};

module.exports = getCurrent;
