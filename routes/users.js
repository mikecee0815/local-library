var express = require('express');
var router = express.Router();
var usersCtrl  = require('../controllers/users_controller');

/* GET /users listing. */
router.get('/', usersCtrl.users);

/* GET a single user "users/user" */
router.get('/user',usersCtrl.user);

/* GET user by id users/:id listing. */
router.get('/:id',usersCtrl.userDetail);

module.exports = router;
