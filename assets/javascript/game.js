$("#searchButton").on("click",function(){

	var animal = $("#searchInput").val().trim();

	var newButton = $("<button>");

	newButton.addClass("animalButton");
	newButton.text(animal);
	$("#buttons").append(newButton);

});

$('.animalButton').on('click', function() {


	var animal = $(this).val().trim();
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
	        url: queryURL,
	        method: 'GET'
	    })
	    .done(function(response) {

	        var results = response.data;

	        for (var i = 0; i < results.length; i++) {

	            var animalDiv = $('<div>');

	            var p = $('<p>').text("Rating: " + results[i].rating);

	            var animalImage = $('<img>');
	            animalImage.attr('src', results[i].images.fixed_height.url);

	            animalDiv.append(p);
	            animalDiv.append(animalImage);

	            $('#gifs').prepend(animalDiv);
	        }

	    });
	});
