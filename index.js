/**
 * Created by ankita on 1/3/18.
 */

const express = require('express');
var multer  =   require('multer');
var bodyParser =    require("body-parser");
var PythonShell = require('python-shell');
var shell = require('shelljs');
var result = [];
const app = express();
app.use('/', express.static(__dirname + "/static"));


var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null,__dirname + "/known_images/Me");
    },
    filename: function (req, file, callback) {
        console.log(file)
        callback(null, file.originalname);
    }
});
var upload = multer({ storage : storage }).array('imgUploader',10);

app.get('/',function(req,res){

    res.sendFile(__dirname + "/index.html");

});

app.get('/result',function (req,res) {
    res.send(result)
});

app.post('/api/Upload',function(req,res){

    upload(req,res,function(err) {
        if(err) {
            console.log(err)
            return res.end("Error uploading file."+err);
        }
        PythonShell.run('test.py',{scriptPath: __dirname+'/Backend/',pythonPath:'/usr/bin/python3',pythonOptions: ['-u']}, function (err,results) {
            if (err) throw err;
            if(results!=null)
                result = results;
            res.redirect('/');

        });
    });

});

app.listen(process.env.PORT||3010,function () {
    "use strict";
    PythonShell.run('scrap_website.py',{scriptPath: __dirname+'/Backend/',pythonPath:'/usr/bin/python3'}, function (err) {
    
        console.log('finished');
    });
    shell.exec('rm '+__dirname+'/known_images/Me/*.*');

});


