/**
 * Created by Anis on 20/10/2014.
 */
var express = require('express'),
    app = express();

app.use(express.static(__dirname + "/dist"));
app.listen(1988);
