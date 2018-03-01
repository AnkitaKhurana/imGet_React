/**
 * Created by ankita on 1/3/18.
 */

const express = require('express');

const app = express();
app.use('/', express.static(__dirname + "/static"));

app.listen(3000,function () {
    
});