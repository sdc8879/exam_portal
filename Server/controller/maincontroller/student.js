var express = require('express');
var router = express.Router();
var commonfunction = require('../../common/commonfunction');
const db = require('../../database/db');

router.post('/', (req, res, next) => {
    console.log('inside student');

    console.log('studentParams------', req.body.studentParams[0])

    var data = {};

    data['table'] = "mst_user";
    data['fields'] = {
        "student_fname": req.body.studentParams[0].first_name,
        "student_lname": req.body.studentParams[0].last_name,
        "student_roll_no": req.body.studentParams[0].roll_no,
        "student_dob": req.body.studentParams[0].dob,
        "student_email": req.body.studentParams[0].email,
        "student_mno": req.body.studentParams[0].mobile_number
    };

    var queryObj = commonfunction.insertQuery(data);

    db.executePreparedQuery(queryObj.query, queryObj.params).then((result) => {
        var obj = {
            "status": "success",
            "message": "Inserted Successfully"
        }
        res.send(obj);

    }).catch((Error) => {
        res.send(Error)
    });

});

module.exports = router;