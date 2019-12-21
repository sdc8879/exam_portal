var express = require('express');
var router = express.Router();
var commonfunction = require('../../common/commonfunction');
const db = require('../../database/db');

router.post('/insert', (req, res, next) => {

    var data = {};

    data['table'] = "mst_question";
    data['fields'] = {
        "sub_id": req.body.questionParams[0].subject_id,
        "ques_name": req.body.questionParams[0].question_name,
        "ques_marks": req.body.questionParams[0].question_marks,
        "ques_status": req.body.questionParams[0].question_status
    };

    var queryObj = commonfunction.insertQuery(data);

    db.executePreparedQuery(queryObj.query, queryObj.params).then((result1) => {
        console.log('result1---------', result1)
        questionOptionInsert(req.body.questionParams[0].question_options, result1.insertId).then((result2) => {
            var obj = {
                "status": "success",
                "message": "Inserted Successfully"
            }
            res.send(obj);
        })

    }).catch((Error) => {
        res.send(Error)
    });

});



function questionOptionInsert(options, q_id) {

    return new Promise((resolve, reject) => {

        var query = "INSERT into mst_options (ques_id,opt_name,opt_isCorrect) values ?";

        var params = [];
        var mainArray = [];

        for (let i = 0; i < options.length; i++) {
            params = []
            params.push('a');
            params.push(options[i].name);
            params.push(options[i].correct_status);
            mainArray.push(params);
        }

        db.executePreparedQuery(query, [mainArray]).then((result) => {
            resolve(true);
        }).catch((Error) => {
            reject(Error)
        })

    });
}





module.exports = router;