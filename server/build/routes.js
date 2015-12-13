// Generated by CoffeeScript 1.10.0
(function() {
  var runQuery;

  runQuery = require('./runQuery.js');

  module.exports = function(app) {
    return app.get('/task', function(req, res) {
      return runQuery('SELECT * FROM tasks;').then(function(data) {
        return res.send([data[0], data[1]]);
      });
    });
  };

}).call(this);
