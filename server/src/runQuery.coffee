path_to_route = '../../../'
Promise     = require 'bluebird'
pg          = require 'pg'
_           = require 'lodash'

run = (query, params) -> 
    
    # Ensure that errors are logged appropriately
    if !_.isArray then throw Error ('Params must be an array in order to run query');

    new Promise (resolve, reject) -> 
        pg.connect 'postgres://postgres:Sharkt0wer@localhost/postgres', (err, client,done) ->
            client.query query, params, (err, result) ->
                if err then done(); reject(err) else done(); resolve result.rows;

module.exports = run
