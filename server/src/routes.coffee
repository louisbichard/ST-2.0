runQuery = require './runQuery.js'

module.exports = (app) ->

    app.get '/task', (req, res) ->
        runQuery 'SELECT * FROM tasks;'
            .then (data) ->
                res.send data[0], data[1]

