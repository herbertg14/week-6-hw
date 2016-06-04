var object1 = {
	amount: 0
}

var object2 = {
	amount: 0
}

var object3 = {
	amount: 0
}

var object4 = {
	amount: 0
}

var youLost = false;
var youWon = false;
var wins = 0;
var loss = 0;
var toBeat =0;
var yourScore = 0;

$('#crystal1').on('click', function() {
	if((youLost == false) && (youWon == false)){
		yourScore += object1.amount;
		$("#yourScore").html(yourScore);
	}

	if (yourScore > toBeat){
		loss += 1;
		alert("You Lost!");
		$("#losses").html(loss);
		playGame();
	}

	if (yourScore === toBeat){
		wins += 1;
		alert("You Won!");
		$("#wins").html(wins);
		playGame();
	}
});

$('#crystal2').on('click', function() {
	if((youLost == false) && (youWon == false)){
		yourScore += object2.amount;
		$("#yourScore").html(yourScore);
	}

	if (yourScore > toBeat){
		loss += 1;
		alert("You Lost!");
		$("#losses").html(loss);
		playGame();
	}

	if (yourScore === toBeat){
		wins += 1;
		alert("You Won!");
		$("#wins").html(wins);
		playGame();
	}
});

$('#crystal3').on('click', function() {
	if((youLost == false) && (youWon == false)){
		yourScore += object3.amount;
		$("#yourScore").html(yourScore);
	}

	if (yourScore > toBeat){
		loss += 1;
		alert("You Lost!");
		$("#losses").html(loss);
		playGame();
	}

	if (yourScore === toBeat){
		wins += 1;
		alert("You Won!");
		$("#wins").html(wins);
		playGame();
	}
});

$('#crystal4').on('click', function() {
	if((youLost == false) && (youWon == false)){
		yourScore += object4.amount;
		$("#yourScore").html(yourScore);
	}

	if (yourScore > toBeat){
		loss += 1;
		alert("You Lost!");
		$("#losses").html(loss);
		playGame();
	}

	if (yourScore === toBeat){
		wins += 1;
		alert("You Won!");
		$("#wins").html(wins);
		playGame();
	}
});


function playGame(){
	object1.amount = Math.floor((Math.random() * 12) + 1);
	object2.amount = Math.floor((Math.random() * 12) + 1);
	object3.amount = Math.floor((Math.random() * 12) + 1);
	object4.amount = Math.floor((Math.random() * 12) + 1);
	toBeat = Math.floor((Math.random() * 102) + 19);

	yourScore = 0;
	$("#yourScore").html(yourScore);

	$("#score").html(toBeat);
}

playGame();


