$( document ).ready(function(){
	console.log("document loaded")

	var table = $('#table').dataTable( {
		"ajax": {
			"url": "api/friends",
			"dataSrc": "",
			"type": "get"
		},
		"columns": [
			{ "data": "name" },
			{ "data": "photo" }
		]
	});

	$.get("api/friends", function( data ) {
		console.log(data);
		$("#friendsJSON").text(JSON.stringify(data))
	});
})