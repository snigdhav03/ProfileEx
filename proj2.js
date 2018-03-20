//$("#button1").addClass("selected");


$("button").on("click", function() {
	$("button").removeClass("selected");
	$(this).addClass("selected");
});

$("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

$("#button3").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$("#about").addEventListener("scroll", function() {
	$("button").removeClass("selected");
	$("#button1").addClass("selected");
	});

$("#portfolio").addEventListener("scroll", function() {
	$("button").removeClass("selected");
	$("#button2").addClass("selected");
	});

$("#contact").addEventListener("scroll", function() {
	$("button").removeClass("selected");
	$("#button3").addClass("selected");
	});


// $(document).ready(function(){
// 	$(window).on("scroll",function(){
//   	var wn = $(window).scrollTop();
//     if(wn== $("#portfolio").offset().top){
//     	$("#button3").addClass("selected");
//     }
//     else if(wn== $("#contact").offset().top ){
//     	$("#button2").addClass("selected");
//     }
//     else {
//     	$("#button1").addClass("selected");
//     }
//   });
// });

function submit() {
	// if($("#msg").attr('value')==="")
	// alert("Add a message!");
	// else
	$("form").reset();
}