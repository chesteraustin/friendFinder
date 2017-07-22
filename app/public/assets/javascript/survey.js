$( document ).ready(function(){
	$("#subForm").on("click", function(){
		//Prevent Submission
		event.preventDefault();

		var formResult = [{
							"name":"Peter Parker",
							"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
							"scores":[0,0,0,0,0,0,0,0,0,0]
							}];

			$.ajax({
				url: '/api/friends',
				dataType: 'json',
				type: 'post',
				data: {
					"name": "Clark Kent",
					"photo": "photo link",
					"scores": [0,0,0,0,0,0,0,0,0,0]
				},
				error: function(error) {
					console.log(error)
				},
				success: function(data) {
					//Update friends name
					$("#friend-name").text(data.name);
					$("#friend-modal").modal('show');
					console.log(data)
				}
			});

	})
})