var express = require('express');
var router = express.Router();





var registerController = require('../controller/maincontroller/register');
var loginController = require('../controller/maincontroller/login');
var subjectController = require('../controller/maincontroller/subject');
var questionController = require('../controller/maincontroller/question');
var jwtToken = require('../common/jwtFunctionality')

// /* GET home page. */
// router.get('/',function(req, res, next) {
//   res.send('index route')
// });


router.use('/user/register', registerController);

router.use('/user/login', loginController);

router.use('/user/subject', subjectController);

router.use('/user/question', questionController);



router.use('/api', function (req, res, next) {
  res.send('a');
});




module.exports = router;
