const express = require('express');
const router = express.Router();
const models = require("../models/student")

//验证身份
router.use((req, res, next) => {
    if (!req.session.key || req.session.type !== "student") {
        res.send({
            code: 0,
            info: "身份错误"
        })
    } else {
        next()
    }
});

// 业务代码
router.get('/', function (req, res, next) {
    if (req.session.key) {
        res.send({
            code: 1,
            info: req.session.key
        });
        next();
    }
 });

router.get('/update_notice',function(req,res,next){
     models.update_notice({}, (data) => {
         res.send({
             code: 0,
             info: "has not logined",
             data: JSON.stringify(data)
            });
    })
    next();
});
router.get('/get_teacher_timetable',function(req,res,next) {
        models.get_teacher_timetable({}, (data) => {
            res.send({
                code: 0,
                info: "has not logined",
                data: JSON.stringify(data)
            });
        })
    next();
});

router.get('/update_class_application',function(req,res,next) {
        models.update_class_application({}, (data) => {
            res.send({
                code: 0,
                info: "has not logined",
                data: JSON.stringify(data)
            });
        })
    next();
});

router.get('/get_teacher_application',function(req,res,next) {
        models.get_teacher_application({}, (data) => {
            res.send({
                code: 0,
                info: "has not logined",
                data: JSON.stringify(data)
            });
        })
    next();
});

router.get('/check_application',function(req,res,next) {
        models.check_application({}, (data) => {
            res.send({
                code: 0,
                info: "has not logined",
                data: JSON.stringify(data)
            });
        })
    next();
 });

 router.get('/update_template',function(req,res,next) {
    models.update_template({}, (data) => {
        res.send({
            code: 0,
            info: "has not logined",
            data: JSON.stringify(data)
        });
    })
    next();
});

router.get('/get_student_recard',function(req,res,next) {
    models.get_student_recard({}, (data) => {
        res.send({
            code: 0,
            info: "has not logined",
            data: JSON.stringify(data)
        });
    })
    next();
});

module.exports = router;