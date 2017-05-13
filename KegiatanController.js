
exports.index = function(req,res, db){

	db.connection.connect();
	
  	var html = '';

	db.connection.query('SELECT * FROM kegiatan', function (error, results, fields) {
	  
	  if (error) throw error;
	  
	  results.forEach(function(row){
	  
	  	html += '<div>'+row.id+'</div>';
	  
	  });
	  
	  res.send(html);
	});
	 
	db.connection.end();
}