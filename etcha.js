$(document).ready(function() {


for(var a = 0; a < 16; a++) {
$("#wrapper > :first-child").after("<div class='block16 blocks'></div>");
};


var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);
var randomColor = "rgb(" + red + ", " + blue + ", " + green + ")";

/*Size Button Click*/
$("#size").click(function () {
	var sizePrompt = prompt("Please choose your grid size from 16, 36, 64, 144, or 625.");

switch(sizePrompt) {
	case "16":
		for(var c = 0; c < 16; c++) {
		$("#wrapper > :first-child").after("<div class='block16 blocks'></div>");
	};
	break;
	
	case "36":
		$("#wrapper").html("<div class='block36 blocks'></div>");
		for(var b = 0; b < 35; b++) {
			$("#wrapper > :first-child").after("<div class='block36 blocks'></div>");
		};
	break;

	case "64":
		$("#wrapper").html("<div class='block64 blocks'></div>");
		for(var d = 0; d < 63; d++) {
			$("#wrapper > :first-child").after("<div class='block64 blocks'></div>");
		};
	break;

	case "144":
		$("#wrapper").html("<div class='block144 blocks'></div>");
		for(var f = 0; f < 143; f++) {
			$("#wrapper > :first-child").after("<div class='block144 blocks'></div>");
		};
	break;

	case "625":
		$("#wrapper").html("<div class='block625 blocks'></div>");
		for(var d = 0; d < 624; d++) {
			$("#wrapper > :first-child").after("<div class='block625 blocks'></div>");
		};
	break;

	default:
	$("#wrapper").html("<div class='block16 blocks'></div>");
	for(var e = 0; e < 15; e++) {
		$("#wrapper > :first-child").after("<div class='block16 blocks'></div>");
	};
};

$(".blocks").mouseenter(function () {
	$(this).fadeTo(175, 0.01);
});

$(".blocks").mouseleave(function () {
	$(this).fadeTo(175, 1)
});

});



/* Style Button Click */
$("#style").click(function () {
	var stylePrompt = prompt("Please choose your grid style from black, draw, rainbow, or rainbow draw.");

switch(stylePrompt) {
	case "black":
	$(".blocks").mouseenter(function () {
	$(this).fadeTo(175, 0.01);
});

$(".blocks").mouseleave(function () {
	$(this).fadeTo(175, 1)
});
	break;
	
	case "draw":
	$(".blocks").mouseenter(function () {
	$(this).fadeTo(175, 0.01);
});
	break;

	case "rainbow":
	$(".blocks").mouseenter(function () {
	$(this).css("background-color", randomColor);
	$(this).fadeTo(175, 0.01);
});
	$(".blocks").mouseleave(function () {
	$(this).fadeTo(175, 1)
});
	break;

	case "rainbow draw":
	$(".blocks").mouseenter(function () {
	$(this).css("background-color", randomColor);
	});
	break;

	default:
	$("#wrapper").html("<div class='block16 blocks'></div>");
	for(var e = 0; e < 15; e++) {
		$("#wrapper > :first-child").after("<div class='block16 blocks'></div>");
	};
	$(".blocks").mouseenter(function () {
	$(this).fadeTo(175, 0.01);
});
	$(".blocks").mouseleave(function () {
	$(this).fadeTo(175, 1)
});

};

});

/* Clear Click */
$("#clear").click(function () {
	$("#wrapper").empty();
	$("#wrapper").html("<div class='block16 blocks'></div>");
	for(var e = 0; e < 15; e++) {
		$("#wrapper > :first-child").after("<div class='block16 blocks'></div>");
	};
	$(".blocks").mouseenter(function () {
	$(this).fadeTo(175, 0.01);
});

	$(".blocks").mouseleave(function () {
	$(this).fadeTo(175, 1)
});
});

/* Standard Page Load */
$(".blocks").mouseenter(function () {
	$(this).fadeTo(175, 0.01);
});

$(".blocks").mouseleave(function () {
	$(this).fadeTo(175, 1)
});


});