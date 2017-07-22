$( document ).ready(function(){
	$("#subForm").on("click", function(){
		//Prevent Submission
		event.preventDefault();

		var formResult = [{
							"name":"Peter Parker",
							"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
							"scores":[0,0,0,0,0,0,0,0,0,0]
							}];
		var scores = [];
		var answers = $("input[name^='q']:checked");
		//loop through answers and push to scores array
		for (var i=0; i < answers.length; i++){
			var currentScore = $(answers[i]).val();
			scores.push(currentScore);
		}

		$.ajax({
			url: '/api/friends',
			dataType: 'json',
			type: 'post',
			data: {
				"name": $("#name").val(),
				"photo": $("#photo").val(),
				"scores": scores
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