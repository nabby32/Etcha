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
	$(this).fadeTo(300, 1);
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
	$(this).fadeTo(300, 1);
});

});

/* Style Click */

$("#style").click(function () {
	$("#wrapper").toggle();
	$(".underStyle").toggle(100);
});

$(".underStyle").mouseenter(function() {
	$(this).css({"background-color":"#ac2d02"})
});

$(".underStyle").mouseleave(function () {
	$(this).css("background-color","#C53302")
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
	$("#myGrid").empty();
	for(var a = 0; a < 4; a ++) {
	$("#myGrid").append("<tr class='row'></tr>");
	}
	for(var b = 0; b < 4; b++) {
	$(".row").append("<td class='blocks'></td>");
	};
	$(".blocks").mouseenter(function () {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		var randomColor = "rgb(" + red + ", " + blue + ", " + green + ")";
		$(this).css({"background-color":randomColor, "opacity":"1"});
	});
});

/* Draw */
$("#draw").click(function () {
	$(".underStyle").toggle();
	$("#wrapper").toggle();
	$("#myGrid").empty();
	for(var a = 0; a < 4; a ++) {
	$("#myGrid").append("<tr class='row'></tr>");
	}
	for(var b = 0; b < 4; b++) {
	$(".row").append("<td class='blocks'></td>");
	};
	$(".blocks").mouseenter(function () {
		$(this).css({"background-color":"#C53302", "opaciry":"1"});
	});
});

/* Scratch */
$("#scratch").click(function () {
	$(".underStyle").toggle();
	$("#wrapper").toggle();
	var opacity = 0.01;
	$(".blocks").mouseenter(function () {
		$(this).css("opacity", opacity + 0.1);
	});
});

/* Clear Page, Reload */
$("#clear").click(function () {
	location.reload();
})



});