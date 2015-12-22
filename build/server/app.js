var express = require('express');
var app = express();
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
console.log('serve node_modules publically!!');
app.use(express.static('node_modules'));
app.use('/node_modules', express.static('node_modules'));
app.use('/bower_components', express.static('bower_components'));
app.use('/public', express.static('build/public'));
app.get('/', function (req, res) {
    fs.readFileAsync('index.html', 'utf-8')
        .then(function (data) {
        res.send(data);
    });
});
app.get('/api/task', function (req, res) {
    return res.send([{
            3244: {
                taskid: "3244",
                status: "Open",
                taskname: "#MP Define process propagating data model updates to the entire data access community",
                targetfinishtime: "2015-12-18T05:00:00.000Z",
                activetask: false,
                statusflag: false,
                statusflagfilter: false,
                assigneduserid: "5",
                assignedusername: "Sandipan Chanda"
            } }]);
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
//# sourceMappingURL=app.js.map