var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


module.exports.generateToken = function (req, res, next) {

    console.log('inside generateToken');
    next()
}
module.exports.verifyToken = function (req, res, next) {

    console.log('inside verifyToken');
    next()
}