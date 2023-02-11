const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config');
const auth = require('../middlewares/auth');
const checkPlayer = require('../middlewares/checkPlayer');
const playerCtrl= require('../controllers/players.controller');

router.post('/', auth, multer, checkPlayer, playerCtrl.create);
router.get('/', playerCtrl.findAll);
router.delete('/:id', auth, playerCtrl.delete);

module.exports = router;
