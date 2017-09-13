
// users controller
exports.users = function(req, res, next) {
  res.render('users');
}

// single user controller
exports.user = function(req, res, next) {
  res.render('single_user');
}