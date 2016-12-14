var time = 90;
var correctCounter = 0;
var incorrectCounter = 0;

function timerCount() {
	timer = setInterval(count, 1000);
}

function count() {
  time--;
  $("#timer").html("Time remaining: " + time);
  if (time == 0) {
  	clearInterval(timer);
  	$("#questionaire").hide();
  	$("#results").css("display", "inline");

  	$('#correct').html("Correct Answers: " + correctCounter);
  	$('#incorrect').html("Incorrect Answers: " + incorrectCounter);

  	console.log(correctCounter);
  	console.log(incorrectCounter);
  }
}

timerCount();

$('#question1').click(function() {
	 if ($("input[value='memento']:checked").val()){
	correctCounter++;
}
	else {
	incorrectCounter++;
	}
});

$('#question2').click(function() {
	 if ($("input[value='lostHighway']:checked").val()){
	correctCounter++;
}
	else {
	incorrectCounter++;
	}
});

$('#question3').click(function() {
	 if ($("input[value='rioDeJaneiro']:checked").val()){
	correctCounter++;
}
	else {
	incorrectCounter++;
	}
});

$('#question4').click(function() {
	 if ($("input[value='redPill']:checked").val()){
	correctCounter++;
}
	else {
	incorrectCounter++;
	}
});

$('#question5').click(function() {
	 if ($("input[value='tomCruise']:checked").val()){
	correctCounter++;
}
	else {
	incorrectCounter++;
	}
});

$('#question6').click(function() {
	 if ($("input[value='christopher']:checked").val()){
	correctCounter++;
}
	else {
	incorrectCounter++;
	}
});

$('#button').on("click", function(){
	clearInterval(timer);
  	$("#questionaire").hide();
  	$("#results").css("display", "inline");

  	$('#correct').html("Correct Answers: " + correctCounter);
  	$('#incorrect').html("Incorrect Answers: " + incorrectCounter);

  	console.log(correctCounter);
  	console.log(incorrectCounter);
})