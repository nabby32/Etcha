$(document).ready(function() {


for(var a = 0; a < 15; a++) {
$("#wrapper > :first-child").after("<div class='blocks'></div>");
};

var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);
var randomColor = "rgb(" + red + ", " + blue + ", " + green + ")";


/*Size Button Click*/
$("#size").click(function () {
	var sizePrompt = prompt("Please choose your grid height/width.");
	while (660%sizePrompt) {
		sizePrompt++;
	}
	var blockSize = Math.floor(660/sizePrompt);

	if(sizePrompt <= 70) {
		$("#wrapper > :first-child").nextAll().remove();
		for(var z = 0; z < ((sizePrompt*sizePrompt)-1); z++) {
			$("#wrapper > :first-child").after("<div class='blocks'></div>");
		}
	}
	else {alert("Please enter a size smaller than 70, as my code is not efficient enough to handle anything higher.");
		$(html).css("display", "none");
		location.reload(true);}
	$(".blocks").css({"height":blockSize + "px", "width":blockSize + "px"});

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
	$(this).css("opacity", "0.01");
	});
	break;

	case "rainbow":
	$(".blocks").mouseenter(function () {
	$(this).css("background-color", randomColor);
	$(this).fadeTo(175, 0.2);
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
	break;

};

});

/* Clear Click */
$("#clear").click(function () {
	$("#wrapper").empty();
	$("#wrapper").html("<div class='blocks'></div>");
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