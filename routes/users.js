var express = require('express');
var router = express.Router();
var usersCtrl  = require('../controllers/users_controller');

/* GET /users listing. */
router.get('/', usersCtrl.users);

/* GET users/user listing. */
router.get('/user',usersCtrl.user);

module.exports = router;
