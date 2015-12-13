express = require 'express';
app = express();
runQuery = require './runQuery.js'
routes = require './routes.js'

app.get '/', (req, res) -> 
    res.send 'Hello World!'

server = app.listen 3000, ->
    host = server.address().address;
    port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port)

# Generate restful routes
routes app