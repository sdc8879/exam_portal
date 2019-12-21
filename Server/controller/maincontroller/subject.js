var express = require('express');
var router = express.Router();
var commonfunction = require('../../common/commonfunction');
const db = require('../../database/db');

router.post('/insert', (req, res, next) => {

    var data = {};

    data['table'] = "mst_sub";
    data['fields'] = {
        "sub_name": req.body.subjectParams[0].subject_name,
        "sub_status": req.body.subjectParams[0].subject_status
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