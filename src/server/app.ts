let express = require('express');
let app = express();
let Promise = require('bluebird');
let fs = Promise.promisifyAll(require('fs'));

console.log('serve node_modules publically!!');

app.use(express.static('node_modules'));
app.use('/node_modules', express.static('node_modules'));
app.use('/public', express.static('build/public'));

app.get('/', function (req:object, res:object) {
  fs.readFileAsync('index.html', 'utf-8')
  .then(function(data){
       res.send(data); 
  });
});


app.get('/api/task', function (req:object, res:object) {
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
  });
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});