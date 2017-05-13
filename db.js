var mysql   = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'sembarang23',
  database : 'learn'
});

module.exports = {
	connection: connection
};