$(document).ready(function() {
  	   $("#main-button").hover(function() {
       $("#main-button").addClass("opacitor");
    });



    $("#main-button").click(function() {
 		if ($("#main-button").hasClass("main-active")) {
 			$(".option").fadeOut(1000);
 			$("#main-button").removeClass("main-active");
 		} else {
 			$(".option").fadeIn(1000);
 			$("#main-button").addClass("main-active");
 		}
	});
});