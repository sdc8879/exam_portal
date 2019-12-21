var express = require('express');
var router = express.Router();
var commonfunction = require('../../common/commonfunction');
const db = require('../../database/db')
router.post('/', (req, res, next) => {
    console.log('inside register');
    // res.send('Register');

    console.log('registerParams------', req.body.registerParams[0])

    var data = {};

    data['table'] = "mst_user";
    data['fields'] = {
        "usr_fname": req.body.registerParams[0].first_name,
        "usr_lname": req.body.registerParams[0].last_name,
        "usr_dob": req.body.registerParams[0].dob,
        "usr_email": req.body.registerParams[0].email,
        "usr_mobile_no": req.body.registerParams[0].mobile_number,
        "usr_password": req.body.registerParams[0].password,
        "usr_type": req.body.registerParams[0].type,
        "usr_status": 1
    };

    var queryObj = commonfunction.insertQuery(data);

    // db.executeQuery('select 1+1 from dual').then((result) => {
    //     res.send(result)
    // }).catch((Error) => {
    //     res.send(Error)
    // });

    db.executePreparedQuery(queryObj.query, queryObj.params).then((result) => {
        var obj = {
            "status": "success",
            "message": "Inserted Successfully"
        }
        res.send(obj)

    }).catch((Error) => {
        res.send(Error)
    });

});

module.exports = router;