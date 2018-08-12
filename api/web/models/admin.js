const connection = require("./connect")
const config = require("./config.json")

var params = config.params;

//对群体发送公告，通知定位到具体班级上
function application(config, callback) {
    connection.query("CALL `class_notice`", (err, rows, fields) => {
        if(err){
            console.log(err);
        }
        else {
            console.log(rows)
            callback(rows)
        }
    })
}

//查看课程的排课情况
function get_application(config, callback) {
    connection.query("CALL `get_teacher_timetable`", params,(err, rows, fields) => {
        if(err){
            console.log(err);
        }
        else {
            console.log(rows)
            callback(rows)
        }
    })
}

//教室的使用情况
function ttimetable(config, callback) {
    connection.query("CALL `get_classroom_timetable`", (err, rows, fields) => {
        if(err){
            console.log(err);
        }
        else {
            console.log(rows)
            callback(rows)
        }
    })
}

//手动增加课程负责人
function recard(config, callback) {
    connection.query("CALL `create_user`", params,(err, rows, fields) => {
        if(err){
            console.log(err);
        }
        else {
            console.log(rows)
            callback(rows)
        }
    })
}

//手动增加实验课程
function recard(config, callback) {
    connection.query("CALL `create_experiment`", params,(err, rows, fields) => {
        if(err){
            console.log(err);
        }
        else {
            console.log(rows)
            callback(rows)
        }
    })
}

//手动增加教师
function recard(config, callback) {
    connection.query("CALL `create_teacher`", params,(err, rows, fields) => {
        if(err){
            console.log(err);
        }
        else {
            console.log(rows)
            callback(rows)
        }
    })
}

//手动增加学生
function recard(config, callback) {
    connection.query("CALL `create_student`", params,(err, rows, fields) => {
        if(err){
            console.log(err);
        }
        else {
            console.log(rows)
            callback(rows)
        }
    })
}

module.exports = {
    'recard':recard,
    'grade' :grade,
    'ttimetable':ttimetable,
    'application':application,
    'get_application':get_application
}