/**
 * Created by ankita on 1/3/18.
 */

const express = require('express');
var multer  =   require('multer');
var bodyParser =    require("body-parser");
var PythonShell = require('python-shell');


const app = express();
// app.use(bodyParser.json());
app.use('/', express.static(__dirname + "/static"));
// app.use(express.bodyParser({uploadDir: "/known_images"}));


var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null,__dirname + "/imGet/known_images/Me");
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

app.post('/api/Upload',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            console.log(err)
            return res.end("Error uploading file.");
        }
        PythonShell.run(__dirname +'imGet/run.py', function (err) {
            if (err) throw err;
            console.log('finished');
        });
        res.end("File is uploaded");
    });


});

app.listen(3010,function () {
});


