$(document).ready(function(){

var points = 0;

$(".button").click(function(event) {
	event.preventDefault();

		var firstAnswer = $("#first-answer").val();
			if (firstAnswer === "Potomac" || firstAnswer === "Potomak") {
				points+=1;
			} else {
				console.log("błąd");
			}
		
		var secondAnswer = $("#second-answer").val();
			if (secondAnswer === "Atlanta") {
				points+=1;
			} else {
				console.log("błąd");	
			}

		var thirdAnswer = $("#third-answer").val();
			if (thirdAnswer === "Chicago") {
				points+=1;
			} else {
				console.log("błąd");}

		var p = document.querySelector("p");		
		p.innerHTML = "Liczba punktów: " + points;		

		$("p").show(500);
		
		$(".button-hidden").show(500);
		
});

});
