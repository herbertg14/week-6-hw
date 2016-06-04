$("#searchButton").on("click",function(){

	var animal = $("#searchInput").val().trim();

	var newButton = $("<button>");

	newButton.addClass("animalButton");
	newButton.addClass("btn btn-default");
	newButton.text(animal);
	$("#buttons").append(newButton);

});


$(document).on('click', '.animalButton',function() {

	$("#gifs").empty();

	var animal = $(this).text();
	console.log(animal);
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
	        url: queryURL,
	        method: 'GET'
	    })
	    .done(function(response) {

	    	console.log(response);

	        var results = response.data;
	        var animalDiv = $('<div>');

	        for (var i = 0; i < results.length; i++) {

	            var p = $('<p>').text("Rating: " + results[i].rating);

	            var animalImage = $('<img>');
	            animalImage.attr('src', results[i].images.fixed_height_still.url);
	            animalImage.addClass('animalGif');
	            animalImage.attr("data-state","still");
	            animalImage.attr("data-still", results[i].images.fixed_height_still.url);
	            animalImage.attr("data-animate",results[i].images.fixed_height.url);

	            $('#gifs').append(p);
	            $("#gifs").append(animalImage);
	        }

	    });
	});

$(document).on("click", ".animalGif", function(){
	console.log(this);
	var state = $(this).attr('data-state');
	if ( state == 'still'){
		$(this).attr('src', $(this).data('animate'));
		$(this).attr('data-state', 'animate');
	}
	else{
		$(this).attr('src', $(this).data('still'));
		$(this).attr('data-state', 'still');
	}
})
