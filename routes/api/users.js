const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
// const { joiRegisterSchema, joiLoginSchema } = require('../../models/user');

const router = express.Router();

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
