$(document).ready(function () {

/* Page Load Grid */
for(var a = 0; a < 4; a ++) {
	$("#myGrid").append("<tr class='row'></tr>");
}
for(var b = 0; b < 4; b++) {
	$(".row").append("<td class='blocks'></td>");
};

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


/* Page Load Etching */

$(".blocks").mouseenter(function () {
	$(this).fadeTo(300, 0.02);
});
$(".blocks").mouseleave(function() {
	$(this).fadeTo(200, 1);
});

});