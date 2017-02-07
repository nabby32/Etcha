$(document).ready(function () {

/* Page Load Grid */
for(var a = 0; a < 4; a ++) {
	$("#myGrid").append("<tr class='row'></tr>");
}
for(var b = 0; b < 4; b++) {
	$(".row").append("<td class='blocks'></td>");
};

/* Page Load Etching */

$(".blocks").mouseenter(function () {
	$(this).fadeTo(300, 0.02);
});
$(".blocks").mouseleave(function() {
	$(this).fadeTo(200, 1);
});

/* Size Click */
$("#size").click(function () {
	var sizePrompt = prompt("Please choose the height/width of your grid.");
	
	/* Determing block size */
	while(660%sizePrompt) {
		sizePrompt++
	}
	var blockSize = 660/sizePrompt;
	
	/* Filling the Grid */
	$("#myGrid").empty();
	for(var d = 0; d < sizePrompt; d ++) {
	$("#myGrid").append("<tr class='row'></tr>");
	$(".row").css("height", blockSize-2);
	};
	for(var e = 0; e < sizePrompt; e++) {
	$(".row").append("<td class='blocks'></td>");
	$(".blocks").css({"height":blockSize-2 + "px", "width":blockSize + "px"});
	}
	$(".blocks").mouseenter(function () {
	$(this).fadeTo(100, 0.02);
	});
	$(".blocks").mouseleave(function() {
	$(this).fadeTo(200, 1);
	});

});

/* Style Click */

$("#style").click(function () {
	$("#wrapper").toggle();
	$(".underStyle").toggle(100);
});

$(".underStyle").mouseenter(function() {
	$(this).css({"background-color":"#951004"})
});

$(".underStyle").mouseleave(function () {
	$(this).css("background-color","#af1104")
});

/* Default Style */
$("#black").click(function () {
	$(".underStyle").toggle();
	$("#wrapper").toggle();
});

/* Rainbow */
$("#rainbow").click(function () {
	$(".underStyle").toggle();
	$("#wrapper").toggle();
	$(".blocks").mouseenter(function () {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		var randomColor = "rgb(" + red + ", " + blue + ", " + green + ")";
		$(this).css("background-color", randomColor);
	});
	$(".blocks").mouseleave(function () {
		$(this).css("background-color", "black")
	});
});

/* Draw */
$("#draw").click(function () {
	$(".underStyle").toggle();
	$("#wrapper").toggle();
	$(".blocks").mouseenter(function () {
		$(this).fadeTo(200, 0.02);
	});
});

/* Scratch */
$("#scratch").click(function () {
	$(".underStyle").toggle();
	$("#wrapper").toggle();
	var opacity = 1;
	$(".blocks").mouseenter(function () {
		$(this).css("opacity", opacity - 0.1);
	});
});





});