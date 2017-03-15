var goal = 74;

// $("numberCrystals").text(goal);

$("#numberCrystals").append(goal);

var counter = 0; 

var goalNumbers = [12, 8, 4, 2];

for (var i = 0; i < goalNumbers.length; i++) {

	var crystalImage = $("<img>");

	crystalImage.addClass("crystal-photo");

	crystalImage.attr("src", "assets/images/Emerald.png");

	crystalImage.attr("crystalTotal", goalNumbers[i]);

	$("#crystal").append(crystalImage);
}

$(".crystal-photo").on("click", function() {

	var value = ($(this).attr("crystalTotal"));

	value = parseInt(value);
		
	counter += value;
	console.log(counter)
	console.log(value)

	alert("Collected: " + counter);

	if (counter === goal) {
		alert("You win!");
		replay();

	}

	else if (counter >= goal) {
		alert("You lose!");
		replay();

	}
});

var replay = function(){
	counter = 0

}




