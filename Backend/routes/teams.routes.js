const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const teamsCtrl = require('../controllers/teams.controller');

//router.post('/', auth, categoriesCtrl.create);
router.get('/', teamsCtrl.findAll);


module.exports = router;
